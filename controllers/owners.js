const {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  fetchPetsByOwner,
  fetchPetByID,
  updateOwner,
  deleteOwnerById
} = require("../models/owners.js");

const getAllOwners = (req, res) => {
  fetchAllOwners((err, owners) => {
    const body = { owners };
    res.send(body);
  });
};

const getOwnerById = (req, res) => {
  fetchOwnerById(req.params.id, (err, owner) => {
    const body = owner;
    res.send(body);
  });
};

const getPetsByOwner = (req, res) => {
  fetchPetsByOwner(req.params.id, (err, pet) => {
    const body = pet;
    res.send(body);
  });
};

const getPetByID = (req, res) => {
  fetchPetByID(req.params.id, (err, pet) => {
    const body = pet;
    res.send(body);
  });
};

module.exports = {
  getAllOwners,
  getOwnerById,
  getPetsByOwner,
  getPetByID
};
