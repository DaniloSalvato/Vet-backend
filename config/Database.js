import mongoose from "mongoose";

export default async function Connection() {
  try {
    await mongoose.connect(process.env.URL_CONNECT_MONGO_DATABASE);
    console.log("Conectado ao MongoDB");
    return mongoose.connection;
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err);
    throw err;
  }
}


