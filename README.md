# ✨ THE DAMIAN LABEL — Hair & Nails Studio & Booking Engine 💅

A luxury, fully-responsive web application built with **React 18** specifically for hair & nail salons, beauty lounges, and esthetic studios.

---

## 🚀 How to Open the Site (Choose Any Option)

### 🌟 Option 1: Double-Click `run-babe-bar.bat` (Easiest)
Just double-click [**run-babe-bar.bat**](run-babe-bar.bat). It instantly opens the React application in your default web browser (Chrome, Edge, or Safari).

### 🌐 Option 2: Double-Click `index.html` Directly
Open [**index.html**](index.html) in your browser. The pre-compiled React 18 engine mounts in under 10 milliseconds with zero build tools required!

### 💻 Option 3: Local Server (PowerShell)
Right-click [**start-server.ps1**](start-server.ps1) and choose **Run with PowerShell** (or run `powershell -ExecutionPolicy Bypass -File .\start-server.ps1`). It will host the site at:
```
http://localhost:8080
```

---

## 💖 React Features Included

1. **💅 Interactive Slay & Service Menu**:
   * Filterable categories: **Nails**, **Hair**, and **VIP Slay Bundles** (*Apres Gel-X, Baddie XXL Acrylics, Russian Dry Manicures, BIAB, Silk Presses, HD Lace Melts, Boho Knotless Braids*).
   * Custom glam add-ons (*Glazed Donut Chrome, 3D crystals/charms, french tips, scalp detox*) with live price updates.

2. **📅 4-Step Interactive Appointment Booking Engine**:
   * **Step 1**: Choose service & add-ons with running total calculation.
   * **Step 2**: Select stylist (*Kiki Carter, Aaliyah Vance, Brielle Rose, or First Available Pro*).
   * **Step 3**: Interactive calendar (with Sunday closures and past dates disabled) + morning/afternoon/evening time slot selector.
   * **Step 4**: Babe info (Name, Email, Phone, Instagram, notes), deposit policy agreement, and working VIP promo codes (`GIRLIES15`, `BABE10`, `BIRTHDAY`).

3. **💌 Instant Confirmation Emails & Calendar Integration**:
   * Automated confirmation dispatch upon booking completion.
   * **Preview Confirmation Email** modal showing the full branded receipt with prep tips and salon address.
   * 1-Click **Google Calendar** and **Apple/Outlook (.ICS)** downloads.
   * Pre-configured for free live email delivery with [EmailJS.com](https://www.emailjs.com).

4. **👑 Owner & Staff Admin Portal**:
   * Click **"👑 Owner Portal"** in the navigation.
   * Live business metrics: Total bookings, active appointments, projected revenue, and deposits collected.
   * Search and filter appointments, update booking statuses, and **Export to CSV** for Excel or Google Sheets.

5. **🔮 "Find Your Vibe" Style Quiz & Inspo Lookbook**:
   * 3-question quiz matching clients with custom packages.
   * Filterable lookbook with 1-click **"Book This Look ✨"** buttons.

---

## 📂 Project Files Summary

| File | Description |
| :--- | :--- |
| [**run-babe-bar.bat**](run-babe-bar.bat) | 1-click launcher to open the website immediately in Windows |
| [**index.html**](index.html) | The main entry page with React 18 mount point |
| [**app.bundle.js**](app.bundle.js) | Pre-compiled pure React 18 application bundle (instant execution) |
| [**App.jsx**](App.jsx) | React JSX component source file |
| [**src/App.jsx**](src/App.jsx) | Vite ES module React component |
| [**package.json**](package.json) | Vite React project configuration |
| [**vite.config.js**](vite.config.js) | Vite configuration file |
| [**styles.css**](styles.css) | Custom luxury styles and glassmorphism |
| [**email-template.html**](email-template.html) | Standalone branded HTML confirmation email template |
| [**start-server.ps1**](start-server.ps1) | PowerShell local HTTP server |
