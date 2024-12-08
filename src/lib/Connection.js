import mongoose from "mongoose";

const Connection = async () => {
  try {
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) return;

    if (connectionState === 2) console.log("connecting");

    await mongoose.connect(process.env.DATABASE_URI);

    if (connectionState === 1) return console.log("Database Connected");
  } catch (error) {}
};

export default Connection;
