const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URL;
mongoose.set('strictQuery', false);

const connectToMongo = () => {
    mongoose
    .connect(mongoURI, {
        autoIndex: false,
    })
    .then( async () => {
    const dbName = await mongoose.connection.name;
      console.log(`successfully ${dbName} connected`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToMongo;