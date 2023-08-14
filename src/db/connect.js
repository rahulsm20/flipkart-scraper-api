import mongoose from "mongoose";

const connectToDB=async(url)=>{
    try{
      await  mongoose.connect(url);
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log('Connected to DB')
    }
}

export default connectToDB