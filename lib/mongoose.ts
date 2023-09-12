import mongoose from 'mongoose'

let isConnected=false;

export const connectToDb=async ()=>{
    mongoose.set('strictQuery',true);

    if(!process.env.MONGODB_URL) return console.log('monfodb url not found');
    if(isConnected) return console.log('already connected to DB');

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected=true;
        console.log("connected to DB")
        
    } catch (error) {
        console.log(error)
    }
}