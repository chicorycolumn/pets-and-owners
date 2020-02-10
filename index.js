const { getAllOwners, getOwnerById } = require("./controllers/owners.js");

const express = require("express"); //App and server mean same thing when we talk in express.

const app = express(); // Now you've made a server!

app.get("/api", getAllOwners);

app.get("api/:id", getOwnerById);

app.listen(9090, () => {
  console.log(`listening on 9090...`);
});
