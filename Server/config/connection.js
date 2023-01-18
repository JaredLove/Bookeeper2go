const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bookkeeper2go', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;