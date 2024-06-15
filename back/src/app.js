const express = require("express");
const cors    = require("cors");
const env     = require("dotenv").config();
const app     = express();

const userRouter = require("./routes/usersRouter");
const loginRouter = require("./routes/loginRouter");
 
app.set('port', process.env.PORT || 1903);
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(__dirname + '\\public'));

app.use('/api', [
  userRouter,
  loginRouter
]);


module.exports = app;
