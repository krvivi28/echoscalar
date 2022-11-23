require('dotenv').config();
const express = require("express");
var util = require("util");
require("./db/db");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

// Using routing
const userWeb = require("./routes/webPageRoute");
const userRouter = require("./routes/routeUser");
app.use(userRouter);
app.use(userWeb);



if(process.env.NODE_ENV==="production")
{
  app.get("/",(req,res)=>
  {
    app.use(express.static(path.resolve(__dirname,'client','build')));
    res.sendFile(path.resolve(__dirname,'client','build','index.html')); 
  })
 
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
