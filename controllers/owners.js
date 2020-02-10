const {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
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
  console.log(req);
  fetchOwnerById((err, owner) => {
    const body = { owner };
    res.send(body);
  });
};

module.exports = {
  getAllOwners,
  getOwnerById
};
