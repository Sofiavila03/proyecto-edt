require('dotenv').config();
const { MONGODB_URI } = process.env;
const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('DB is connected');
    } catch (error) {
        console.error('Error connecting to DB:', error);
        process.exit(1);
    }
}

module.exports = { connectDB, mongoose };
