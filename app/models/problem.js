var mongoose = require('mongoose');

//Define the problem schema
var ProblemSchema = new mongoose.Schema({
  name:String,
  prompt:String,
  iterative:String,
  userSolution:String,
});

//Export the Mongoose model
module.exports = mongoose.model('Problem',ProblemSchema);