const mongoose = require("mongoose");

const PSEUDO = process.env.MONGODB_PSEUDO;
const PASSWORD = process.env.MONGODB_PASSWORD;
const CLUSTER_NAME = process.env.MOGODB_CLUSTER_NAME;
const COLLECTION_NAME = process.env.MONGODB_COLLECTION_NAME;

mongoose.set("strictQuery", true);

mongoose
  .connect(
    `mongodb+srv://${PSEUDO}:${PASSWORD}@${CLUSTER_NAME}.d51otgm.mongodb.net/${COLLECTION_NAME}`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Connection à la DB OK"))
  .catch((err) => console.log(err));
