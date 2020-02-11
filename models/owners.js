const { readFile, readdir, writeFile } = require("fs");

const fetchAllOwners = cb => {

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
    
    let count = 0

    let haveInvoked = false

    for (let i = 0; i < files.length; i++) {
      readFile(`${__dirname}/../data/owners/${files[i]}`, (err, owner) => {
        
        count++

        if (err) {
          cb(err);
        } else {
          const parsedOwner = JSON.parse(owner);
          if (parsedOwner.id === id) {
            
            console.log("Good user!")
            
            cb(null, parsedOwner);
            haveInvoked = true
          
          } else if (haveInvoked === false && count === files.length) {
            
            console.log("No good users!")
            cb("oh fuck")
          }
        }
      });


      
    }
  });
};

const fetchPetsByOwner = (id, cb) => {
  readdir(__dirname + "/../data/pets/", (err, files) => {
    let arrayOfParsedPets = [];
    let count = 0;
    for (let i = 0; i < files.length; i++) {
      readFile(`${__dirname}/../data/pets/${files[i]}`, (err, pet) => {
        count++;
        if (err) {
          cb(err);
        } else {
          const parsedPet = JSON.parse(pet);

          if (parsedPet.owner === id) {
            arrayOfParsedPets.push(parsedPet);
          }

          if (count === files.length) {
            cb(null, arrayOfParsedPets);
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

const updateOwner = (id, data, cb) => {
  //CANNIBALISED
  readdir(__dirname + "/../data/owners/", (err, files) => {
    for (let i = 0; i < files.length; i++) {
      readFile(`${__dirname}/../data/owners/${files[i]}`, (err, owner) => {
        if (err) {
          cb(err);
        } else {
          const parsedOwner = JSON.parse(owner);
          if (parsedOwner.id === id) {
            updatedOwner = { ...parsedOwner };

            if (data.age !== undefined) {
              updatedOwner.age = data.age;
            }
            if (data.name !== undefined) {
              updatedOwner.name = data.name;
            }

            const stringyUpdatedOwner = JSON.stringify(updatedOwner);

            writeFile(
              `${__dirname}/../data/owners/${id}.json`,
              stringyUpdatedOwner,
              "utf8",
              err => {
                if (err) {
                  throw err;
                }
                //else{console.log(`I wrote a file at ${id}`)}
                else {
                  cb(null, JSON.parse(stringyUpdatedOwner));
                }
              }
            );
          }
        }
      });
    }
  });
};

const createOwner = (data, cb) => {
  
  let timestamp = new Date().getTime()
  
  data.id = `o${timestamp}`

  writeFile(`${__dirname}/../data/owners/o${timestamp}.json`, JSON.stringify(data), (err)=>{
    if (err){cb(err)}
    else{
      cb(null, {msg: "you wrote something!!!"})
    }
  })





};

const createPet = (ownerID, data, cb) => {
  
  let timestamp = new Date().getTime()
  data.id = `p${timestamp}`
  data.owner = ownerID
  
  writeFile(`${__dirname}/../data/pets/p${timestamp}.json`, JSON.stringify(data), (err)=>{
    if (err){cb(err)}
    else{
      cb(null, {msg: "you wrote something!!!"})
    }
  })
}



const deleteOwnerById = (id, cb) => {};

module.exports = {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  fetchPetByID,
  updateOwner,
  deleteOwnerById,
  fetchPetsByOwner,
  createPet

};
