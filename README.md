# JioFi M2S Device Controller - GitHub Pages Edition

🚀 **Access your JioFi M2S device from anywhere using this web application!**

This is a client-side web application that works entirely in your browser to control your JioFi M2S device. Perfect for when you want to access your JioFi from any device without installing software.

## ✨ Features

- 📞 **Voice Calls** - Make calls through your JioFi SIM
- 📹 **Video Calls** - Use your device's camera for video calls  
- 💬 **SMS Messaging** - Send and receive text messages
- 🎙️ **Voice Messages** - Record and send voice notes
- 📊 **Device Status** - Monitor signal, battery, network status
- ⚙️ **USSD Codes** - Check balance and data usage

## 🚀 Quick Start

### Method 1: GitHub Pages (Easiest)

1. **Fork this repository** to your GitHub account
2. **Go to Settings** → **Pages** in your forked repo
3. **Select Source:** Deploy from branch → main → / (root)
4. **Click Save** and wait for deployment
5. **Access your app:** `https://yourusername.github.io/jiofi-web-app`

### Method 2: Direct Download

1. **Download** the `index.html` file
2. **Open** it in any modern web browser
3. **Connect** to your JioFi network first
4. **Use** the application!

### Method 3: Local Server (Advanced)

```bash
# Clone the repository
git clone https://github.com/yourusername/jiofi-web-app.git
cd jiofi-web-app

# Start a local server
python -m http.server 8000
# OR
npx serve .

# Open browser to http://localhost:8000
```

## 📱 How to Use

### Step 1: Connect to JioFi
- Connect your device to the JioFi WiFi network
- OR connect via USB cable

### Step 2: Open the App
- Open the GitHub Pages URL or local file
- Choose your connection method (WiFi/USB/Remote)

### Step 3: Login
- Enter JioFi IP (usually `192.168.1.1`)
- Enter admin username (default: `administrator`)
- Enter admin password (default: `administrator`)
- Click "Connect to JioFi Device"

### Step 4: Start Using!
- Make voice/video calls
- Send SMS messages
- Record voice messages
- Check device status
- Use USSD codes

## 🔧 Network Setup

### WiFi Connection (Recommended)
1. Connect to JioFi WiFi network
2. Use IP: `192.168.1.1`
3. Use default credentials

### USB Connection
1. Connect JioFi to computer via USB
2. Check network settings for correct IP
3. Use detected IP address

### Remote Access
1. Configure port forwarding on your router
2. Forward port 80 to JioFi IP (192.168.1.1)
3. Use your public IP or domain name
4. **Security Warning:** Change default password!

## 🔐 Security Notes

- **Change default admin password** on your JioFi device
- **Use HTTPS** when available for better security
- **Don't share** your JioFi admin credentials
- **Enable firewall** on your router
- **Regularly update** JioFi firmware

## 🌐 Browser Compatibility

✅ **Chrome** 80+ (Recommended)
✅ **Firefox** 75+
✅ **Safari** 13+
✅ **Edge** 80+

### Required Features:
- WebRTC support (for voice/video calls)
- MediaDevices API (for microphone/camera)
- Modern JavaScript (ES6+)

## 🛠️ Technical Details

### How It Works

1. **Client-Side Only:** No server required - runs entirely in browser
2. **Direct API Calls:** Communicates directly with JioFi device APIs
3. **WebRTC Integration:** Uses browser's WebRTC for voice/video calls
4. **Local Storage:** Saves settings locally in browser

### Architecture

```
Browser (GitHub Pages)
    ↓
JioFi Device APIs (192.168.1.1)
    ↓
JioFi SIM Network
    ↓
Calling/Messaging Services
```

### APIs Used

- **Authentication:** JioFi web interface login
- **SMS:** JioFi SMS API endpoints
- **Voice:** WebRTC + JioFi voice gateway
- **Status:** JioFi device status endpoints
- **USSD:** JioFi USSD command interface

## 🐛 Troubleshooting

### Connection Issues

**Problem:** Cannot connect to JioFi
```
Solution:
1. Check if connected to JioFi WiFi
2. Verify IP address (try 192.168.1.1)
3. Check if JioFi web interface works
4. Try different browser
```

**Problem:** Login fails
```
Solution:
1. Verify admin credentials
2. Check for caps lock
3. Try resetting JioFi to defaults
4. Check if someone changed password
```

### Voice/Video Call Issues

**Problem:** Cannot make calls
```
Solution:
1. Allow microphone/camera permissions
2. Check JioFi signal strength
3. Verify SIM has calling service
4. Try refreshing the page
```

**Problem:** Poor call quality
```
Solution:
1. Check network signal
2. Move closer to JioFi device
3. Close other bandwidth-heavy apps
4. Try voice message instead
```

### SMS Issues

**Problem:** SMS not sending
```
Solution:
1. Check recipient number format
2. Verify SIM has SMS service
3. Check message center number
4. Try shorter message
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

### Development Setup

1. Fork the repository
2. Make your changes
3. Test locally
4. Submit pull request

### Features to Add

- [ ] Dark mode support
- [ ] Multiple device support
- [ ] Call history
- [ ] SMS backup/restore
- [ ] Push notifications
- [ ] PWA support

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- JioFi M2S device community
- WebRTC documentation
- GitHub Pages team
- Open source contributors

## 📞 Support

- **Issues:** Report on GitHub Issues
- **Discussions:** GitHub Discussions
- **Wiki:** Check project wiki for guides

---

**Made with ❤️ for the JioFi community**

⭐ **Star this repository if you find it helpful!**