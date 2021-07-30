const mongoose = require("mongoose");
const db = mongoose.connection;


function connect(){
    let connectionString = `mongodb+srv://Todo_2021_CS:C00ldawg@todo.ayhqu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((err) => {
        console.log("There was an error connecting to mango: ", err); 
    });

}