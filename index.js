const express = require("express");
const cors = require("cors"); //cross origin resouce sharing
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

// mongoose.connect(uri{
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

mongoose.connect(uri)
  .then(() => app.listen(port, () => console.log("server corriendo en puerto: " + PORT)))
  .catch((err) => console.log(err));

const projectRouter = require("./routes/projects");
const bugRouter = require("./routes/bugs");

app.use("/project", projectRouter);
app.use("/bug", bugRouter);

app.listen(port, () => {
  console.log(" server corriendo en el puerto " + port);
});
