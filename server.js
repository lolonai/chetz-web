const express = require("express");
const path = require("path");
const fs = require("fs");
const favicon = require("express-favicon");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(favicon(__dirname + "/build/favicon.ico"));

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/\$OG_TITLE/g, "Agence web! CheTz Web")
      .replace(
        /\$OG_DESCRIPTION/g,
        "Agence web à Nantes et Lyon, votre identité en ligne plus simplement, création, refonte, impression"
      )
      .replace(/\$OG_IMAGE/g, "https://zupimages.net/up/20/30/4eps.jpg");

    res.send(data);
  });
});

app.get("/team", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/\$OG_TITLE/g, "Notre CheTz équipe")
      .replace(
        /\$OG_DESCRIPTION/g,
        "Bâtir vos projets est notre métier. Basé à Nantes et à Lyon nous nous déplaçons dans toute la france."
      )
      .replace(/\$OG_IMAGE/g, "https://zupimages.net/up/20/30/qau9.jpg");

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
      .replace(/\$OG_TITLE/g, "Nos CheTz prestation")
      .replace(
        /\$OG_DESCRIPTION/g,
        "Quelque soit votre projet, nous pouvons toujours le réaliser, Web ou Impression notre équipe dynamique se charge de tout."
      )
      .replace(/\$OG_IMAGE/g, "https://zupimages.net/up/20/30/by9e.jpg");

    res.send(data);
  });
});

app.get("/contact", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/\$OG_TITLE/g, "CheTz-Web contact")
      .replace(
        /\$OG_DESCRIPTION/g,
        "Parlez nous de votre projet, laissez parler votre imagination."
      )
      .replace(/\$OG_IMAGE/g, "https://zupimages.net/up/20/30/wzhp.jpg");

    res.send(data);
  });
});

app.use(express.static(path.resolve(__dirname, "./build")));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
