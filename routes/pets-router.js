const petsRouter = require("express").Router();
const { getPetByID } = require("../controllers/owners")

petsRouter.get("/:id", getPetByID)

module.exports = petsRouter;
