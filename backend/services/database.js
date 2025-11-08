import mongoose from 'mongoose';


const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
  dbName: "mockEcom",
});

        console.log('Connected to MongoDB database');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
}

export default connectToDatabase;
