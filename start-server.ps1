# ==============================================================================
# The Damian Label - Local Web Server Launcher
# Serves the static website on http://localhost:8080 and opens your browser
# ==============================================================================

$port = 8080
$url = "http://localhost:$port/"

Write-Host "✨ Starting The Babe Bar Local Web Server at $url..." -ForegroundColor Magenta

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)

try {
    $listener.Start()
    Write-Host "💖 Server is LIVE! Open your browser at $url" -ForegroundColor Green
    Write-Host "Press Ctrl + C in this terminal to stop the server.`n" -ForegroundColor Yellow

    # Launch default browser
    Start-Process $url

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $localPath = $request.Url.LocalPath
        if ($localPath -eq "/" -or $localPath -eq "") {
            $localPath = "/index.html"
        }

        $filePath = Join-Path $PSScriptRoot $localPath.TrimStart('/')

        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css" { "text/css; charset=utf-8" }
                ".js" { "application/javascript; charset=utf-8" }
                ".json" { "application/json; charset=utf-8" }
                ".png" { "image/png" }
                ".jpg" { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".svg" { "image/svg+xml" }
                ".ics" { "text/calendar" }
                ".wav" { "audio/wav" }
                ".mp3" { "audio/mpeg" }
                ".m4a" { "audio/mp4" }
                ".ogg" { "audio/ogg" }
                default { "application/octet-stream" }
            }

            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        }
        else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }

        $response.OutputStream.Close()
    }
}
finally {
    $listener.Stop()
    $listener.Close()
}
