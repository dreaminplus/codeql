var app = require("express")(),
  path = require("path");

app.get("/user-files", function(req, res) {
  var file = req.param("file");
  if (typeof path !== 'string' || file.indexOf("..") !== -1) {
    // BAD
    // forbid paths outside the /public directory
    res.status(400).send("Bad request");
  } else {
    var absolute = path.resolve("/public/" + file);
    console.log("Sending file: %s", absolute);
    res.sendFile(absolute);
  }
});
