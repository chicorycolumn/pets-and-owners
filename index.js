const {
  getAllOwners,
  getOwnerById,
  getPetsByOwner,
  getPetByID,
  updateOwnerDetails
} = require("./controllers/owners.js");

const express = require("express"); //App and server mean same thing when we talk in express.

const app = express(); // Now you've made a server!

app.use(express.json());

app.get("/api", getAllOwners);

app.get("/api/:id", getOwnerById);

app.get("/api/:id/pets", getPetsByOwner);

app.get("/api/pets/:id", getPetByID);

app.post("/api/owners/:id", updateOwnerDetails);

app.listen(9090, () => {
  console.log(`listening on 9090...`);
});
