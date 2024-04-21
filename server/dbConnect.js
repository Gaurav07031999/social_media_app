const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://gaurav96161559:3vLyPprpb2npEj8R@cluster0.kduw6qf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  try {
    const connect = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
