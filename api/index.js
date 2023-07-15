const express = require("express");
const mongoose = require("mongoose");
const app = express();
var cors = require('cors');


const userRoute = require("./routes/users");
const adminRoute = require("./routes/admins");
const deptRoute = require("./routes/departmentRoutes");
const doctorRoute = require("./routes/doctorRoutes");
const hospitalRoutes = require ("./routes/hospitalRoutes");
const schemeRoutes = require("./routes/schemeRoutes");
const treatmentRoutes = require("./routes/treatmentRoutes");


mongoose
  .connect("mongodb+srv://admin:admin@cluster0.yhftlyt.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  }); 


app.use(cors())

app.use(express.json());


app.use("/api/users", userRoute);
app.use("/api/admin",adminRoute);
app.use("/api/dept",deptRoute);
app.use("/api/doctor",doctorRoute);
app.use("/api/hospital", hospitalRoutes);
app.use ("/api/schemes",schemeRoutes);
app.use("/api/treatment",treatmentRoutes);



app.listen(8800, () => {
    console.log("Application running");
});




module.exports = app;