# Financial Markets Online - BSE & Asset Tracker

A high-end, mobile-optimized Progressive Web App (PWA) designed to track Botswana Stock Exchange (BSE) equities, venture boards, dual-listed stocks, ETFs, and international assets in real time. Built with a modern dark-mode smart home glassmorphism aesthetic, persistent local storage, interactive performance charts, and direct portfolio management controls.

---

## 🌟 Main Purpose
The primary purpose of **Financial Markets Online - BSE Tracker** is to provide local and international investors with a frictionless, real-time platform to monitor Botswana Stock Exchange market prices, evaluate asset allocation, track annual estimated dividend yields, and manage personal share holdings directly from a mobile or desktop interface.

---

## ✨ Key Features

* **Complete BSE Board Coverage:** Full asset dataset tracking across Domestic Main Board, Venture Capital Board, Dual-Listed Equities, ETFs, and international assets (such as Realty Income).
* **Live Market Board & Quick Actions:** Interactive market pricing grid allowing users to input share quantities and add or remove assets straight from the market board view with a single tap.
* **Portfolio Valuation & Dividend Estimator:** Real-time calculation of total portfolio value and estimated annual dividend payouts based on active holdings.
* **Interactive Asset Allocation Chart:** Dynamic doughnut charts powered by Chart.js visualizing your portfolio distribution.
* **Glassmorphism Design System:** High-end dark mode aesthetics featuring deep charcoal backgrounds (`#0d1117`), frosted glass cards (`backdrop-filter: blur(20px)`), and customizable theme accents (Warm Orange, OLED Black, Gold, Electric Green).
* **Progressive Web App (PWA) Capabilities:** Fully installable on Android and iOS devices with offline support via service workers.
* **Local Data Persistence:** Client-side storage using `localStorage` to securely save your portfolio configuration without requiring an external backend database.

---

## 📂 Project Structure

```text
bse-tracker/
├── index.html       # Single-file frontend application containing the complete dashboard UI, styling, and logic
├── manifest.json    # PWA configuration manifest for app installation and metadata
└── sw.js            # Service worker handling background caching and PWA installation compliance
