const mongoose = require('mongoose');
const db=process.env.db_key;
mongoose.connect(db).then(() => {
    console.log("connection successfull");
}).catch((err) => {
    console.log("connection failed");
});