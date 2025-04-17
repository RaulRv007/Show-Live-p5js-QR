# 📱 Live Preview QR for VS Code

Easily preview your local web project on your phone!  
This extension generates a QR code pointing to your `Live Server` URL, so you can instantly open your project from any device on the same WiFi.

Perfect for testing **p5.js sketches**, web animations, or any frontend project.

---

## ✨ Features

- Detects your local IP address
- Defaults to `http://<local-ip>:5500/index.html`
- Option to customize port and file name
- Detects if **Live Server** is running
- Displays QR code in the **terminal as ASCII**

---

## 📦 Installation (Locally)

```bash
npm install -g vsce
vsce package
code --install-extension live-preview-qr-0.0.1.vsix
´´´

Scan it with your phone camera – boom! Preview your project.

---

## ⚙️ Usage

1. Make sure [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) is running
2. Run command: `Show Live Preview QR`
   - Use the Command Palette: `Ctrl+Shift+P` → search `"Show Live Preview QR"`
3. Scan the QR code with your phone
4. ✨ Done!

---

## 🧩 Optional Config

When prompted, you can enter:
- Custom **port** (default is `5500`)
- Custom **filename** (default is `index.html`)

---

## 💡 Why Use This?

- Instantly test responsive layouts
- Share your sketch with a friend nearby
- Quickly debug p5.js or Three.js sketches on your phone
- Demo your frontend project without deploying it

---

## 🛠 Requirements

- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- All devices (phone + computer) must be on the **same WiFi network**

---

## 📦 Installing Locally

```bash
vsce package
code --install-extension live-preview-qr-0.0.1.vsix
