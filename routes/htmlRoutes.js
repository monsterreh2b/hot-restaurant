

// constructor function for creating partyBus objects
var htmlRoutes = function() {
  // this.duds will hold all of our dud objects

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});




};

// exporting the PartyBus constructor which we will use in main.js
module.exports = htmlRoutes;
