const express = require("express");

const path = require("path");

const app = express();

app.use(express.static(__dirname)); 

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
console.log(__dirname);

  app.get("/news", function(req, res) {
    res.sendFile(path.join(__dirname, "news.html"));
  });

  app.get("/page3", function(req, res) {
    res.sendFile(path.join(__dirname, "page3.html"));
  });

app.listen(3000);
console.log("listening on http://localhost:3000");