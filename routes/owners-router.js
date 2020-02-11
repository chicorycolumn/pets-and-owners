const ownersRouter = require("express").Router();
const {
  getAllOwners,
  getOwnerById,
  getPetsByOwner,
  updateOwnerDetails,
  addNewOwner,
  addPetToOwner
} = require("../controllers/owners.js");

ownersRouter.get("/", getAllOwners);
ownersRouter.get("/:id", getOwnerById);
ownersRouter.get("/:id/pets/", getPetsByOwner);

ownersRouter.post("/:id/pets/", addPetToOwner);
ownersRouter.post("/:id", updateOwnerDetails);
ownersRouter.post("/", addNewOwner);

module.exports = ownersRouter;
