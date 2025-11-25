const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('Connected to MongoDB');

  // Check if user already exists
  const existingUser = await User.findOne({ email: '12345@qq.com' });
  if (existingUser) {
    console.log('Test user already exists');
    process.exit(0);
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('123456', salt);

  // Create test user
  const testUser = await User.create({
    username: 'testuser',
    email: '12345@qq.com',
    password: hashedPassword
  });

  console.log('Test account created successfully!');
  console.log('Email: 12345@qq.com');
  console.log('Password: 123456');
  process.exit(0);
})
.catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
