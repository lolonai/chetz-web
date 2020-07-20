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
    data = data.replace(/\$OG_TITLE/g, "CheTz Web Agence");
    data = data.replace(
      /\$OG_DESCRIPTION/g,
      "Votre Agence web à Nantes et Lyon, votre identité en ligne plus simplement"
    );
    result = data.replace(/\$OG_IMAGE/g, "/public/images/image-accueil.JPG");
    response.send(result);
  });
});

app.get("/pr&eacutesentation", function (request, response) {
  console.log("Presentation page visited!");
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "CheTz-Web Notre équipe");
    data = data.replace(
      /\$OG_DESCRIPTION/g,
      "Notre équipe, efficacité, batir vos projets est notre métier."
    );
    result = data.replace(/\$OG_IMAGE/g, "/public/images/image-equipe.JPG");
    response.send(result);
  });
});

app.get("/services", function (request, response) {
  console.log("Services page visited!");
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "CheTz-Web prestation");
    data = data.replace(
      /\$OG_DESCRIPTION/g,
      "Quelque soit votre projet, nous pouvons toujours le réaliser, Web ? Impression notre équipe dynamique se charge de tout."
    );
    result = data.replace(/\$OG_IMAGE/g, "/public/images/image-services.JPG");
    response.send(result);
  });
});

app.get("/contact", function (request, response) {
  console.log("Contact page visited!");
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "CheTz-Web contact");
    data = data.replace(
      /\$OG_DESCRIPTION/g,
      "Formulaire de contact CheTz-Web, parlez nous de votre projet."
    );
    result = data.replace(/\$OG_IMAGE/g, "/public/images/image-contact.JPG");
    response.send(result);
  });
});
app.use(express.static(path.resolve(__dirname, "./build")));

app.get("*", function (request, response) {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
