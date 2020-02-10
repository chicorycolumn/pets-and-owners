const {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById,
} = require('../models/owners.js');



const getAllOwners = (req, res) => {
	fetchAllOwners((err, owners) => {
    const body = {owners}
		res.send(body)
  })
}


const getOwnerById = () => {}


module.exports = {
  getAllOwners,
  getOwnerById
};