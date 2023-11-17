const { exec } = require("child_process");
const path = require("path");

const args = process.argv.slice(2);

let file = undefined;

if (args.length < 2) {
  const date = new Date();
  const year = date.getFullYear().toString();
  const day = date.getDate().toString();
  file = path.join(__dirname, year, `${day}.js`);
} else {
  const year = args[0];
  const day = args[1];
  file = path.join(__dirname, year, `${day}.js`);
}

console.log(`running ${file}...`);

exec(`node ${file}`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
  } else {
    console.log(stdout);
  }
});
