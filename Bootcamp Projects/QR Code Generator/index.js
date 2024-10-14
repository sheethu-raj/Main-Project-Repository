import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { exit } from "process";

inquirer
  .prompt([{
    message : "Type in your URL",
    name: "URL",
  }])
  .then((answers) => {
    console.log(answers);
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));
    fs.writeFile('URL.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      })
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Cannot render in this environment. Try again.");
    } else {
      exit;
    }
  });