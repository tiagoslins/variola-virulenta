const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/variola-virulenta', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao MongoDB!');
  } catch (error) {
    console.error('Erro de conexão:', error);
  }
};

module.exports = connectDB;