const mongoose = require("mongoose");
const { MONGODB_PASSWORD , MONGODB_URI } = process.env

console.log(MONGODB_PASSWORD ,MONGODB_URI)

mongoose.connect(
  MONGODB_URI.replace('<password>' , MONGODB_PASSWORD),
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
).then(() => {
    console.log("Atlass Connected Sucsessfully")
})
.catch(() => {
    console.log("Database not connected")
});

module.exports = mongoose
