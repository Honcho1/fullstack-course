/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Please enter a URL to generate a QR code:",
      validate: (input) => input.trim() !== "" || "URL cannot be empty.",
    },
    {
      type: "input",
      name: "filename",
      message:
        "Please enter a filename for the QR code image (without extension):",
      choices: ["qr_code", "my_qr", "default"],
    },
  ])
  .then((answers) => {
    const { url, filename } = answers;
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
