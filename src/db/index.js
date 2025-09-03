import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("mongoDB connected!!");
    } catch (error) {
        console.error("mongoDB connection failed!\n", error);
        process.exit(1);
    }
};

export default connectDB;
