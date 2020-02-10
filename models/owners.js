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

const createOwner = (data, cb) => {};

const updateOwner = (id, data, cb) => {};

const deleteOwnerById = (id, cb) => {};

module.exports = {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById
};
