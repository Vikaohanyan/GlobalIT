/* Էջի ընդհանուր տեսքը */
body {
  background-color: #fafafa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  padding: 40px;
}

/* Լոգինի հատվածը */
.login-container {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  margin-bottom: 30px;
}

.login-container input {
  padding: 10px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  margin-right: 10px;
  outline: none;
}

.login-container button {
  padding: 10px 20px;
  background-color: #0095f6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

/* Ապրանքի քարտը (Card) */
.product-card {
  background: white;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  width: 300px;
  overflow: hidden;
  margin: 0 auto;
}

.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.product-info {
  padding: 15px;
}

.product-info h3 {
  margin: 0 0 10px 0;
  font-size: 1.2rem;
}

/* Քանակի կոճակները */
.counter-group {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 15px 0;
}

.counter-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
}

.counter-btn:hover {
  background: #f0f0f0;
}

/* Like կոճակը */
.like-section {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  margin-top: 10px;
}

.like-icon {
  font-size: 24px;
  transition: transform 0.2s ease;
}

.like-icon:active {
  transform: scale(1.4);
}