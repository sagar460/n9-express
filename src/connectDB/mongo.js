import mongoose from "mongoose";


// mongoose.connect('mongodb://localhost:27017/n9',()=>{
//     console.log("connected to mongodb")
// });

const connectMongoDB = () => {
    mongoose.connect("mongodb://localhost:27017/n9");
    console.log("Connected to MongoDB Database")
}
export default connectMongoDB;