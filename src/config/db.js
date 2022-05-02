import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://tomidziurdzia:Walter960@cluster.aclfo.mongodb.net/projectsrepositories?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const url = `${connection.connection.host}: connection.connection.port`;
    console.log(`MongoDB Conectado en: ${url}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default conectarDB;
