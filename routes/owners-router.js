const ownersRouter = require("express").Router();
const {
  getAllOwners,
  getOwnerById,
  getPetsByOwner,
  updateOwnerDetails
} = require("../controllers/owners.js");

ownersRouter.get("/", getAllOwners);
ownersRouter.get("/:id", getOwnerById);
ownersRouter.get("/:id/pets/", getPetsByOwner);

ownersRouter.post("/:id", updateOwnerDetails);

module.exports = ownersRouter;
