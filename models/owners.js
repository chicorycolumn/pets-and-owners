const {readFile} = require("fs")

const fetchAllOwners = (cb) => { //magically get err and data
  readFile('./data/owners/o1.json', 'utf8', (err, data)=>{
    console.log(data)
    if (err){cb(err)}
    else{cb(null, JSON.parse(data) )}
  })
};




const createOwner = (data, cb) => {};

const fetchOwnerById = (id, cb) => {};

const updateOwner = (id, data, cb) => {};

const deleteOwnerById = (id, cb) => {};

module.exports = {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById,
};
