const jwt = require('jsonwebtoken');

// JWT ստուգման middleware (Protected routes-ի համար)
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Մուտքը մերժված է: Թոքենը բացակայում է:' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(403).json({ message: 'Անվավեր թոքեն:' });
  }
};

// Ադմինի դերը ստուգող middleware
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Մուտքը թույլատրված է միայն ադմինիստրատորներին:' });
  }
};

module.exports = { verifyToken, isAdmin };