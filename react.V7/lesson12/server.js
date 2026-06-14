const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('./user.model');
const Post = require('./post.model');

const app = express();
app.use(express.json());

const JWT_SECRET = "super_secret_key_123"; 

mongoose.connect('mongodb://localhost:27017/auth_homework_db')
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch(err => console.error("MongoDB connection error:", err));

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: "Неавторизован (Токен отсутствует)" });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = await User.findById(decoded.userId).select('-password'); 
    if (!req.user) return res.status(401).json({ message: "Пользователь не найден" });

    next();
  } catch (error) {
    return res.status(401).json({ message: "Неверный или просроченный токен" });
  }
};

app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, avatar } = req.body;
    
    const candidate = await User.findOne({ email });
    if (candidate) return res.status(400).json({ message: "Такой email уже зарегистрирован" });

    const newUser = new User({ name, email, password, avatar });
    await newUser.save();

    res.status(201).json({ message: "Пользователь успешно создан!" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Неверный email или пароль" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Неверный email или пароль" });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1d' });

    res.json({ token, message: "Вы успешно вошли!" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.get('/api/auth/me', authMiddleware, (req, res) => {
  res.json(req.user);
});

app.post('/api/auth/logout', (res) => {
  res.json({ message: "Вы успешно вышли. Удалите токен на клиенте." });
});

app.post('/api/auth/change-password', authMiddleware, async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    
    const user = await User.findById(req.user._id);
    
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) return res.status(400).json({ message: "Неверный старый пароль" });

    user.password = newPassword;
    await user.save();

    res.json({ message: "Пароль успешно изменен!" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.get('/api/users/:id/public', async (req, res) => {
  try {
  
    const publicUser = await User.findById(req.params.id).select('name avatar');
    if (!publicUser) return res.status(404).json({ message: "Пользователь не найден" });
    
    res.json(publicUser);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.post('/api/posts', authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;

    const newPost = new Post({
      title,
      content,
      author: req.user._id
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Auth server running on port ${PORT}`));