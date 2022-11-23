const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },

  resume: {
    type: String,
    // required: true,
  },
  stime: {
    type: String,
    default: "echo",
    // required: true,
  },
  startdate: {
    type: String,
    default: "echo",
    // required: true,
  },

  enddate: {
    type: String,
    default: "echo",
    // required: true,
  },
  endtime: {
    type: String,
    default: "echo",
    // required: true,
  },

  status: {
    type: String,
    default: "false",
    // required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Register = new mongoose.model("Register", registerSchema);
module.exports = Register;
