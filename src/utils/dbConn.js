import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URI;

if (!MONGODB_URL) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
    if (cached.conn === null || cached.conn === undefined) {
        if (!cached.promise) {
            const opts = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                bufferCommands: false,
            };
            console.log(opts)
            cached.promise = mongoose
                .connect(MONGODB_URL, opts)
                .then((mongoose) => {
                    console.log("Mongoose connected to MongoDB");
                    return mongoose;
                }).catch(err => console.log(err))
        }

        cached.conn = await cached.promise;
    }

    return cached.conn;
};

export default dbConnect;
