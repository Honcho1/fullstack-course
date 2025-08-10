/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Please enter a URL to generate a QR code:",
      validate: (input) => input.trim() !== "" || "URL cannot be empty.",
      filter: (input) => input.trim(),
    },
    {
      type: "input",
      name: "filename",
      message:
        "Please enter a filename for the QR code image (without extension):",
      default: "qrcode",
      filter: (input) => input.trim() || "qrcode",
    },
    {
      type: "list",
      name: "format",
      message: "Which format would you like to save the QR code in?",
      choices: ["png", "svg"],
      default: "png",
    },
  ])
  .then((answers) => {
    const { url, filename, format } = answers;
    const filePath = `${filename}.${format}`;
    const textFilePath = `${filename}.txt`;

    fs.writeFileSync(textFilePath, url, "utf8");
    console.log(`URL saved to ${textFilePath}.`);

    if (format === "svg") {
      const svgString = qr.imageSync(url, { type: "svg" });
      fs.writeFileSync(filePath, svgString);
      console.log(`SVG QR Code saved to ${filePath}.`);
    } else {
      const pngStream = qr.image(url, { type: "png" });
      const out = fs.createWriteStream(filePath);
      pngStream.pipe(out);
      out.on("finish", () => console.log(`PNG QR Code saved to ${filePath}.`));
      out.on("error", (err) => console.error("Write error:", err));
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.error("Prompt couldn't be rendered in the current environment.");
    } else {
      // Something else went wrong
      console.error("An error occurred:", error);
    }
  });
