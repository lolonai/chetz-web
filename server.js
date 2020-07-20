// le new

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const fs = require("fs");
const favicon = require("express-favicon");

app.use(favicon(__dirname + "/build/favicon.ico"));

app.get("/", function (request, response) {
  console.log("Home page visited!");
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data
      .replace(/\$OG_TITLE/g, "Agence CheTz Web")
      .replace(
        /\$OG_DESCRIPTION/g,
        "Votre Agence web à Nantes et Lyon, votre identité en ligne plus simplement"
      )
      .replace(/\$OG_IMAGE/g, "https://zupimages.net/up/20/30/4eps.jpg");
    response.send(data);
  });
});

app.get("/team", function (request, response) {
  console.log("Presentation page visited!");
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data
      .replace(/\$OG_TITLE/g, "CheTz Notre équipe")
      .replace(
        /\$OG_DESCRIPTION/g,
        "Notre équipe, efficacité, batir vos projets est notre métier."
      )
      .replace(/\$OG_IMAGE/g, "https://zupimages.net/up/20/30/qau9.jpg");
    response.send(data);
  });
});

app.get("/services", function (request, response) {
  console.log("Services page visited!");
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data
      .replace(/\$OG_TITLE/g, "CheTz prestation")
      .replace(
        /\$OG_DESCRIPTION/g,
        "Quelque soit votre projet, nous pouvons toujours le réaliser, Web ? Impression notre équipe dynamique se charge de tout."
      )
      .replace(/\$OG_IMAGE/g, "https://zupimages.net/up/20/30/by9e.jpg");
    response.send(data);
  });
});

app.get("/contact", function (request, response) {
  console.log("Contact page visited!");
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data
      .replace(/\$OG_TITLE/g, "CheTz contact")
      .replace(
        /\$OG_DESCRIPTION/g,
        "Formulaire de contact CheTz-Web, parlez nous de votre projet."
      )
      .replace(/\$OG_IMAGE/g, "https://zupimages.net/up/20/30/wzhp.jpg");
    response.send(data);
  });
});
app.use(express.static(path.resolve(__dirname, "./build")));

app.get("*", function (request, response) {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
