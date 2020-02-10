const { readFile, readdir } = require("fs");

const fetchAllOwners = cb => {
  //magically get err and data

  readdir("./data/owners/", (err, files) => {
    console.log(files);

    let arrayOfObjects = [];

    for (let i = 0; i < files.length; i++) {
      readFile(`./data/owners/${files[i]}`, (err, data) => {
        if (err) {
          cb(err);
        } else {
          arrayOfObjects.push(JSON.parse(data));
        }

        if (arrayOfObjects.length === files.length) {
          cb(null, arrayOfObjects);
        }
      });
    }
  });
};

const fetchOwnerById = (id, cb) => {
  readdir(__dirname + "/../data/owners/", (err, files) => {
    for (let i = 0; i < files.length; i++) {
      readFile(`${__dirname}/../data/owners/${files[i]}`, (err, owner) => {
        if (err) {
          cb(err);
        } else {
          const parsedOwner = JSON.parse(owner);
          if (parsedOwner.id === id) {
            cb(null, parsedOwner);
          }
        }
      });
    }
  });
};

const fetchPetsByOwner = (id, cb) => {
  readdir(__dirname + "/../data/pets/", (err, files) => {
    let arrayOfParsedPets = []
    let count = 0
    for (let i = 0; i < files.length; i++) {
      readFile(`${__dirname}/../data/pets/${files[i]}`, (err, pet) => {
        count++
        if (err) {
          cb(err);
        } else {
          const parsedPet = JSON.parse(pet);
          
          if (parsedPet.owner === id) {
            arrayOfParsedPets.push(parsedPet)
          }
          
          if (count===files.length){
            cb(null, arrayOfParsedPets)
          } //If you've put all the ones we want, now invoke ;
        }
      });
    }
  });
};

const fetchPetByID = (id, cb) => {
  readdir(__dirname + "/../data/pets/", (err, files) => {
    for (let i = 0; i < files.length; i++) {
      readFile(`${__dirname}/../data/pets/${files[i]}`, (err, pet) => {
        if (err) {
          cb(err);
        } else {
          const parsedPet = JSON.parse(pet);
          if (parsedPet.id === id) {
            cb(null, parsedPet);
          }
        }
      });
    }
  });
};


const createOwner = (data, cb) => {};

const updateOwner = (id, data, cb) => {};

const deleteOwnerById = (id, cb) => {};

module.exports = {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  fetchPetByID,
  updateOwner,
  deleteOwnerById,
  fetchPetsByOwner
};
