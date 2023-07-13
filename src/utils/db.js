import mongoose from "mongoose";

mongoose.set('strictQuery', true);

const connect = async () => { 
  try{
    await mongoose.connect(process.env.MONGO)
  }catch(e){
    throw new Error(e)
  }
}

export default connect