const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB միացված է հաջողությամբ:');
  } catch (err) {
    console.error('Բազայի միացման սխալ:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;