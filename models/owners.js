const {readFile, readdir} = require("fs")

const fetchAllOwners = (cb) => { //magically get err and data  
  
  readdir("./data/owners/", (err, files)=>{
    console.log(files)

    let arrayOfObjects = []

    for (let i = 0; i < files.length; i++){
      readFile(`./data/owners/${files[i]}`, (err, data) => {
        if (err){cb(err)}
        else{arrayOfObjects.push(JSON.parse(data))}
      
        if (arrayOfObjects.length === files.length){
          cb(null, arrayOfObjects)
        } 
      })
    }
  })
};

const fetchOwnerById = (id, cb) => {
  readdir("./data/owners/", (err, files)=>{
    console.log(files)

  })
};


const createOwner = (data, cb) => {};



const updateOwner = (id, data, cb) => {};

const deleteOwnerById = (id, cb) => {};

module.exports = {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById,
};
