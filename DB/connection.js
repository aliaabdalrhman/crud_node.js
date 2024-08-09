import mongoose from 'mongoose'


const connectDb = () => {
    return mongoose.connect(process.env.DbConnection).then(result => {
        console.log("db connection established");
    }).catch(error => {
        console.log("db connection failed", error);
    })
};
export default connectDb;