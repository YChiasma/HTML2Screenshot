## 📸 HTML Screenshot Generator

Automatically capture **desktop** and **mobile** screenshots of all `.html` files in a specified folder using [Puppeteer](https://pptr.dev/).

---

### 🚀 Features

* 📁 Scans a given input folder for all `.html` files
* 💻 Generates **desktop** (1366×768) and **mobile** (375×812) screenshots
* 🗂️ Saves screenshots in a specified output folder
* 🧩 Simple command-line usage
* 🔒 Works fully offline for local HTML files

---

### 🧩 Requirements

* [Node.js](https://nodejs.org/) **v18+**
* [npm](https://www.npmjs.com/) (comes with Node)

---

### ⚙️ Installation

1. Clone or download this repository:

   ```bash
   git clone https://github.com/YChiasma/HTML2Screenshot.git
   cd HTML2Screenshot
   ```

2. Install dependencies:

   ```bash
   npm install puppeteer
   ```

---

### 🖥️ Usage

Run the script with two arguments:

```bash
node screenshot-generator.js <input_folder> <output_folder>
```

#### Example:

```bash
node screenshot-generator.js ./pages ./screenshots
```

📂 **Input folder:** must contain `.html` files (e.g., `index.html`, `about.html`)
📸 **Output folder:** will be created automatically if it doesn’t exist.

---

### 📁 Example Folder Structure

```
project/
├── pages/
│   ├── index.html
│   ├── about.html
│   └── contact.html
├── screenshot-generator.js
└── screenshots/       ← generated automatically
    ├── index-desktop.png
    ├── index-mobile.png
    ├── about-desktop.png
    ├── about-mobile.png
    └── contact-desktop.png
```

---

### 🧠 Notes

* The script uses Puppeteer’s headless Chrome to render and capture screenshots.
* If your HTML files depend on external assets (like CSS or JS), make sure the file paths are correct.
* You can modify viewport sizes in the script to match different devices.

---

### 🧰 Customization Ideas

* Add CLI flags for custom viewport sizes
* Include remote URL screenshot support
* Capture PDFs instead of PNGs
* Add timestamped filenames