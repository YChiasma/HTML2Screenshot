import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";

/**
 * Capture desktop and mobile screenshots of all HTML files in a folder
 * @param {string} inputDir - Directory containing .html files
 * @param {string} outputDir - Directory to save screenshots
 */
async function captureScreenshots(inputDir, outputDir) {
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Get all .html files in the input directory
  const htmlFiles = fs
    .readdirSync(inputDir)
    .filter((file) => file.endsWith(".html"));

  if (htmlFiles.length === 0) {
    console.error("❌ No .html files found in input directory.");
    process.exit(1);
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const file of htmlFiles) {
    const filePath = path.join(inputDir, file);
    const url = `file://${path.resolve(filePath)}`;
    const baseName = path.basename(file, ".html");

    console.log(`📄 Processing: ${file}`);

    // --- Desktop view ---
    await page.setViewport({ width: 1366, height: 768 });
    await page.goto(url, { waitUntil: "networkidle2" });
    const desktopPath = path.join(outputDir, `${baseName}-desktop.png`);
    await page.screenshot({ path: desktopPath, fullPage: true });
    console.log(`✅ Saved: ${desktopPath}`);

    // --- Mobile view ---
    await page.setViewport({ width: 375, height: 812, isMobile: true });
    await page.goto(url, { waitUntil: "networkidle2" });
    const mobilePath = path.join(outputDir, `${baseName}-mobile.png`);
    await page.screenshot({ path: mobilePath, fullPage: true });
    console.log(`📱 Saved: ${mobilePath}`);
  }

  await browser.close();
  console.log("🎉 All screenshots completed!");
}

// --- Command-line interface ---
const [inputDir, outputDir] = process.argv.slice(2);

if (!inputDir || !outputDir) {
  console.error(
    "Usage: node screenshot-generator.js <input_folder> <output_folder>"
  );
  process.exit(1);
}

captureScreenshots(inputDir, outputDir);
