const mongoose = require('mongoose');
//connect to mongodb atlas
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/LivingLend', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;