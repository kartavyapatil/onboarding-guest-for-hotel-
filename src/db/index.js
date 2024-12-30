import mongoose from "mongoose";
const DB_NAME="hotel"
const connectDB=async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected DB host :${mongoose.connection.host}`)
    }catch(error){
        console.log("mongodb connection error ",error);
        process.exit(1)
    }
}
export default connectDB