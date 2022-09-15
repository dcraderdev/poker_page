const mongoose = require('mongoose')

const connectDB = async() => {
  try{
    mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log('MongoDB is Connected...');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports - connectDB;