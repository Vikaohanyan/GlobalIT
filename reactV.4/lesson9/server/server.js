const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = async () => {
  try {
    const mongoose = require('mongoose');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));

const PORT = process.env.PORT || 5000;

// Միացում բազային և սերվերի ստարտ
const startServer = async () => {
  const mongoose = require('mongoose');
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const Product = require('./models/Product'); // Համոզվիր, որ մոդելի հասցեն ճիշտ է

async function seedProducts() {
  const count = await Product.countDocuments();
  if (count === 0) {
    await Product.insertMany([
      {
        name: "Chanel No. 5",
        price: 150,
        description: "Լեգենդար և էլեգանտ բույր իսկական կանանց համար:",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80",
        category: "Chanel",
        inStock: true
      },
      {
        name: "Dior Sauvage",
        price: 130,
        description: "Թարմ և վայրի բույր՝ նախատեսված տղամարդկանց համար:",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80",
        category: "Dior",
        inStock: true
      }
    ]);
    console.log("Ժամանակավոր ապրանքները հաջողությամբ ավելացան բազա:");
  }
}

// Կանչում ենք ֆունկցիան բազային միանալուց հետո
mongoose.connection.once('open', () => {
  seedProducts();
});
    console.log('MongoDB միացված է:');
    app.listen(PORT, () => console.log(`Սերվերը պատրաստ է ${PORT} պորտում`));
  } catch (err) {
    console.error(err);
  }
};

startServer();