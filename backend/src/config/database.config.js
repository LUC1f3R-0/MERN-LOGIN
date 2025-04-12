import mongoose from "mongoose"

const connection = async () => {
    mongoose.connection.on('connected', () => { console.log('database connected successfully') })
    mongoose.connection.on('disconnected', () => { console.log('database disconnected') })
    mongoose.connection.on('error', (err) => { console.log('database connection error: ', err) })

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: 'database-one'
        })
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

// Graceful shutdown handling: Ensures the database connection is properly closed when the app terminates
process.on("SIGINT", async () => {
    await mongoose.connection.close(); // Close the database connection
    console.log("🔴 MongoDB connection closed due to app termination");
    process.exit(0); // Exit the application with a success code (0)
});

export default connection