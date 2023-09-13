const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

.then(() => {
  console.log("MongoDB connected");
})
.catch(err => {
  console.log("MongoDB connection error: ", err);
});

module.exports = mongoose.connection;
