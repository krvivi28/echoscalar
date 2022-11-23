const express = require("express");
const router = new express.Router();
const Register = require("../models/registers");

var multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

// Get request to go to home page
// router.get("/", (req, res) => {
//   var udata = Register.find({});
//   udata.exec(function (err, data) {
//     if (err) throw err;
//     // res.render("test");
//     res.render("test", { records: data });
//   });
// });
router.get("/listpage", (req, res) => {
  var udata = Register.find({}).sort({ fname: 1 });
  udata.exec(function (err, data) {
    if (err) throw err;
    // res.render("test");
    res.render("listpage", { records: data });
  });
});
router.get("/allusers", async (req, res) => {
  try {
    const data = await Register.find({});
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/alluserss", async (req, res) => {
  try {
    const data = await Register.find({status:"yes"});
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/sbn", async (req, res) => {
  var udata = await Register.find({}).sort({ fname: 1 });
  // res.send(udata);
  res.render("listpage", { records: udata });
});
router.get("/sbd", async (req, res) => {
  var udata = await Register.find({}).sort({ date: 1 });
  // res.send(udata);
  res.render("listpage", { records: udata });
});
// router.get("/delete/:id", function (req, res) {
//   var del=Register.findByIdandRemove(req.params.id);
//   console.log(req.params.id);
//  del.exec(function (err) {
//     if (err) throw err;
//     // res.render("test");
//     res.redirect("/");
//   });
// });
// router.get("/delete/:id", async (req, res) => {
//   try {
//     var id = req.params.id.slice(1);
//     var del = await Register.deleteOne({ _id: id });
//     res.send("del");
//   } catch (error) {
//     res.send("del error");
//   }
// });

router.get("/delete/:id", async (req, res) => {
  try {
    var id=req.params.id.slice(1);
    var del = await Register.deleteOne({_id:id});
   res.send(del);
  } catch (error) {
    res.send("some error occured");
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    var id = req.params.id.slice(1);
    // var edit = await Register.findByIdandUpdate({ _id: id });
    const {startdate,stime,enddate,endtime,status}=req.body;
    const newdata={};
    newdata.startdate=startdate;
    newdata.enddate=enddate;
    newdata.stime=stime;
    newdata.endtime=endtime;
    newdata.status=status;
    var data = await Register.findOneAndUpdate({ _id: id,},{$set:newdata},{new:true});
    // const updatedData=await data.save();
    // var data = await Register.deleteOne({ _id: id });
    // res.send(updatedData);
    res.send(data);
  } catch (error) {
    console.log("hit kiya error ke saath");
    res.status(400).send("edit error");
  }
});

router.post("/apply", async (req, res) => {
  try {
    const reguser = new Register({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      resume: req.body.resume,
      endtime:req.body.endtime,
      stime:req.body.stime,
      startdate:req.body.startdate,
      enddate:req.body.enddate,
    });

    const data = await reguser.save();
    console.log("saved");

    res.status(200).send(reguser);
  } catch (err) {
    res.status(401).send(err);
  }
});

module.exports = router;
