/*

Honestly should be 85% the same

*/
// This file is in charge of database connection

const mongoose = require("mongoose");
const db = mongoose.connection;

function connect(callback) {
    let connectionString = `mongodb+srv://nasir:ag367447@cluster0.nj7jr.mongodb.net/recipe-book?retryWrites=true&w=majority`

    console.log("Connect to db...")
    
  mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((err)=>{
        console.log("There was an error connectiong to mongo: ", err);
    });
    db.once("open", callback);
}

// exporting as object --> {}
// because there will be multiple things inside the object
module.exports = { // same as module.exports = connect, 
    connect, 
};

