const dbConnect = require("./config/db_connection");
const User = require("./models/userModel");


dbConnect();

const getUsers = async() => {
    try {
        const users = await User.find();
        console.log(users);
    }
    catch(err){
        console.log(err);
    }
}


const updateUser = async(id, updatedData) => {
    try{
        await User.updateOne({_id: id}, {$set: updatedData});
        console.log(`User of id: ${id} updated`);
    }
    catch(err){
        console.log(err);
    }
}

const deleteUser = async(id) => {
    try{
        await User.deleteOne({_id: id});
         console.log(`User of id: ${id} deleted`);
    }
    catch(err){
        console.log(err);
    }
}

const main = async() => {
    await getUsers();

    const id = "68a969c40b5c73f5390520f7";
    const updatedData = {
        name: "Ali Hassan",
        email : "ali123@gmail.com"
    }

    // await updateUser(id, updatedData);

    await deleteUser(id);
}

main();
