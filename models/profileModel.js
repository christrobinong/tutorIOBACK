const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const ProfileSchema = mongoose.Schema({
    userID: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      default: " ",
    },
    firstName: {
      type: String,
      default: " ",
    },
    lastName: {
      type: String,
      default: " ",
    },
    year: {
        type: String,
        default: " ",
    },
    faculty: {
        type: String,
        default: " ",
    },
    major: {
        type: String,
        default: " ",
    },
    telegram: {
      type: String,
      default: " ",
    },
    biography: {
      type: String,
      default: " ",
    },
    qualifications: { 
      type: String,
      default: " ",
    },
    isTutor: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    image: { 
      type: String,
      default: ""
    }, calendarLink: {
      type: String,
      default: ""
    }
});

module.exports = mongoose.model("profile", ProfileSchema);