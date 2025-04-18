# 📱 Live Preview QR — Instantly View Your Web Project on Your Phone

**Live Preview QR** is a simple yet powerful Visual Studio Code extension that helps you preview your local web projects (like p5.js sketches) on any device connected to the same WiFi — using a QR code.

Just start your Live Server, run the command, scan the QR code with your phone, and you're in! 🪄

---

## 🌟 Features

- 🔍 **Auto-detects Live Server status**
- 🌐 **Detects your local IP** for network access
- 📄 **Custom file and port input** (with smart defaults)
- 🧠 **Smart defaults**: `index.html` + port `5500`
- 🧾 **ASCII QR Code in terminal** – no GUI needed
- 🧪 Perfect for testing **p5.js**, **HTML/CSS/JS**, or **frontend frameworks**

---

## 🎯 Why This Extension?

Developers often want to quickly see how their web projects behave on mobile devices without deploying to the web. This extension bridges that gap by providing a live network preview via QR code.

Ideal use cases:
- Preview **responsive designs** on your phone
- Test **touch interaction**
- Share your local prototype with others nearby
- Demo **p5.js sketches** in class, events, or meetups

---

## ⚙️ Installation

### 👉 Via VSIX (Local Install)

1. Install VSCE if you haven't:
   ```bash
   npm install -g vsce
   ```

2. Package the extension:
   ```bash
   vsce package
   ```

3. Install it in VS Code:
   ```bash
   code --install-extension live-preview-qr-0.0.1.vsix
   ```

Or install manually in VS Code:
- Open **Extensions view**
- Click the `...` menu (top-right)
- Select **"Install from VSIX..."**
- Choose the `.vsix` file

---

## 🚀 Usage

1. Open your web project (HTML/JS/p5.js/etc.)
2. Start **Live Server** (if not running)
3. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS)
4. Search and run: `Show Live Preview QR`
5. When prompted:
   - Enter a custom **port** (or press Enter to use `5500`)
   - Enter a custom **filename** (or press Enter to use `index.html`)
6. Scan the QR code displayed in the **terminal** with your phone

✅ Your project opens instantly!

---

## 🧠 Default Behavior

| Setting      | Default     |
|--------------|-------------|
| Port         | `5500`      |
| File         | `index.html` |

No config needed if you're using Live Server with standard settings.

---

## 🔐 Requirements

- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- All devices (computer & phone) must be connected to the **same WiFi**

---

## 📌 Example Output

```bash
🌐 Live Server detected!
🔎 Detected local IP: 192.168.1.42
📁 Serving file: index.html
🔢 Port: 5500
🌍 URL: http://192.168.1.42:5500/index.html

📱 Scan this QR code with your phone camera to preview:
███▀▀▀█ ▄▄▄ █ ▄▄ ▄▀█ ...
██ ▄█ ▀ ▀▄█▄▀█ █ ▀█ █
...
```

---

## 🛠 Troubleshooting

### ⚠️ Can’t detect Live Server?
Make sure:
- You’ve started Live Server (`index.html` should be open in the browser)
- You’re not using a custom server port without updating the input

### 🛜 QR not working on phone?
- Ensure your phone is on the **same WiFi** as your computer
- Try accessing the IP/URL manually in your phone’s browser

---

## 🧩 Extension Commands

- `Show Live Preview QR`: Main command to generate and show QR code
- Accepts optional port and file input
- Always displays QR in **terminal** as ASCII (GUI support planned)

---

## ✨ Future Features (Planned)

- GUI QR panel popup
- Automatic QR refresh when Live Server URL changes
- QR code copy to clipboard

---

## 👨‍💻 Contributing

Contributions welcome!  
Feel free to open an issue, submit a feature request, or fork and PR!

---

## 📃 License

[MIT License](LICENSE)

---

## 💬 Feedback

Found a bug? Have an idea?  
Open an issue or reach out — your feedback is super valuable!

---

Made with ❤️ to help developers preview smarter.
