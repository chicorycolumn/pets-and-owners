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

const updateOwnerDetails = (req, res) => {
  updateOwner(req.params.id, req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
};

const addNewOwner = (req, res) =>{
  
  if (req.body.name === undefined || req.body.age === undefined){

    res.status(400).send('I am afraid you have not formatted the new user correctly.');


  } else {
  
  
  
  createOwner(req.body, (err, data) => {
    
    if (err) {
      console.log(err);
    } else {


      // fetchAllOwners((err, owners) => {
      //   const body = { owners };
      //   res.send(body);
      // });


      getAllOwners(req, res)



      // res.send(data);


    }
  })
}
}

module.exports = {
  getAllOwners,
  getOwnerById,
  getPetsByOwner,
  getPetByID,
  updateOwnerDetails,
  addNewOwner
};
