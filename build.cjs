const fs = require('fs');
const babel = require('C:/Users/User/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/@babel/core');
const presetReact = require('C:/Users/User/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/@babel/preset-react');

console.log('Compiling App.jsx to app.bundle.js...');

let src = fs.readFileSync('App.jsx', 'utf8');

// Strip any ES export statement if running directly in browser global
src = src.replace(/export\s+default\s+function/g, 'function');
src = src.replace(/export\s+const\s+/g, 'const ');

const result = babel.transformSync(src, {
  presets: [presetReact],
  filename: 'App.jsx'
});

const bundleCode = `// Pre-compiled Pure React 18 Application Bundle
// Zero-runtime-Babel dependency - Instant execution
(function() {
${result.code}

if (typeof ReactDOM !== 'undefined' && document.getElementById('root')) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(React.createElement(App));
}
})();
`;

fs.writeFileSync('app.bundle.js', bundleCode, 'utf8');
console.log('Successfully compiled app.bundle.js! Size:', bundleCode.length, 'bytes');
