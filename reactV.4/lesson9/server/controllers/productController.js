const Product = require('../models/Product');

// Բոլոր ապրանքների ստացում (Public)
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Սերվերի սխալ:' });
  }
};

// Ապրանքի ավելացում (Admin)
exports.createProduct = async (req, res) => {
  try {
    const { name, brand, price, description, image, category, inStock } = req.body;
    const newProduct = new Product({ name, brand, price, description, image, category, inStock });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: 'Տվյալների սխալ, ապրանքը չավելացավ:' });
  }
};

// Ապրանքի փոփոխում (Admin)
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: 'Ապրանքը չի գտնվել:' });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: 'Փոփոխման սխալ:' });
  }
};

// Ապրանքի ջնջում (Admin)
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Ապրանքը չի գտնվել:' });
    res.json({ message: 'Ապրանքը հաջողությամբ ջնջվեց:' });
  } catch (err) {
    res.status(500).json({ message: 'Ջնջման սխալ:' });
  }
};