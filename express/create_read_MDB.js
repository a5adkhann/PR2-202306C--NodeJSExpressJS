const connectDB = require("./config/db_connection");
const User = require("./models/userModel");


connectDB();

// Create
// const addUser = async() => {
//     try {
//         await User.insertOne({
//             name : "Ahmed",
//             email : "ahmed@gmail.com"
//         });
//         console.log("Inserted successfully");
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// addUser();


// Read
const getUsers = async() => {
    try {
       const users = await User.find();
       console.log(users);
    }
    catch(err){
        console.log(err);
    }
}

getUsers();













