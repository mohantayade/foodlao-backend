import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    auth0Id:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    number:{
        type: Number,
    },
    name:{
        type: String,
    },
    addressLine1:{
        type: String,
    },
    city:{
        type: String,
    },
    country:{
        type: String,
    },
    
});


const User = mongoose.model("User",userSchema);
export default User;