const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Խնդրում ենք լրացնել բոլոր դաշտերը:' });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: 'Գաղտնաբառը պետք է լինի առնվազն 6 նիշ:' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Այս էլ. փոստով օգտատեր արդեն գրանցված է:' });
    }

    // Գաղտնաբառի հեշավորում (Bcrypt)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: role || 'user' // Հնարավորություն տալ սկզբում ձեռքով admin սարքել
    });

    await newUser.save();
    res.status(201).json({ message: 'Գրանցումը հաջողությամբ ավարտվեց:' });
  } catch (err) {
    res.status(500).json({ message: 'Սերվերի սխալ:', error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Սխալ էլ. փոստ կամ գաղտնաբառ:' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Սխալ էլ. փոստ կամ գաղտնաբառ:' });

    // JWT թոքենի գեներացում (ներառում ենք ID, անունը և դերը)
    const token = jwt.sign(
      { id: user._id, name: user.name, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ message: 'Սերվերի սխալ:' });
  }
};