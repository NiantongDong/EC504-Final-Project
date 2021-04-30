const express = require("express");
const app = express();

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})
app.get('/Pathfinding.html', function(req, res){
  res.sendFile(__dirname + "/Pathfinding.html");
});
app.get('/Sorting.html', function(req, res){
  res.sendFile(__dirname + "/Sorting.html");
});
app.listen(3000, () => {
  console.log("The server is up and running!");
});
