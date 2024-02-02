const dotenv = require("dotenv");
dotenv.config();

const connectToMongo = require("./db");
const express = require('express')
const app = express()
connectToMongo();


const appPort = process.env.PORT || 7000;

// Start server
app.listen(appPort, () => {
    console.log(`server started ${appPort}`)
})

// Middleware
app.use(express.json())  

app.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to pizza!"})
})
// Use routes
app.use("/api", require("./routes/pizza"));
app.use("/api", require("./routes/order"));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });


const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/pizza';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Ошибка подключения к MongoDB:'));
db.once('open', () => {
  console.log('Подключено к MongoDB');
});


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
  });
  
  const User = mongoose.model('User', userSchema);

const newUser = new User({
  name: 'Имя пользователя',
  email: 'user@example.com',
  age: 25
});

newUser.save((err, user) => {
  if (err) return console.error(err);
  console.log('Пользователь сохранен в базе данных:', user);
});