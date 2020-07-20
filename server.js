const express = require("express");
const favicon = require("express-favicon");

const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(favicon(__dirname + "/build/favicon.ico"));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "CheTz Web bienvenue")
      .replace(
        /__DESCRIPTION__/g,
        "Agence web à Nantes et Lyon, votre identité en ligne plus simplement"
      )
      .replace(/__IMAGE__/g, __dirname + "/build/image/image-accueil.JPG");

    res.send(data);
  });
});

app.get("/pr&eacutesentation", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "CheTz-Web Notre équipe")
      .replace(
        /__DESCRIPTION__/g,
        "Notre équipe, efficacité, batir vos projets est notre métier."
      )
      .replace(/__IMAGE__/g, __dirname + "/build/image/image-equipe.JPG");

    res.send(data);
  });
});

app.get("/services", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "CheTz-Web prestation")
      .replace(
        /__DESCRIPTION__/g,
        "Quelque soit votre projet, nous pouvons toujours le réaliser, Web ? Impression notre équipe dynamique se charge de tout."
      )
      .replace(/__IMAGE__/g, __dirname + "/build/image/image-services.JPG");

    res.send(data);
  });
});

app.get("/services", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "CheTz-Web contact")
      .replace(
        /__DESCRIPTION__/g,
        "Formulaire de contact CheTz-Web, parlez nous de votre projet."
      )
      .replace(/__IMAGE__/g, __dirname + "/build/image/image-contact.JPG");

    res.send(data);
  });
});

app.use(express.static(path.resolve(__dirname, "./build")));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
