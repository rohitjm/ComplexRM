var Problem = require('./models/problem');
var Eval = require('./evalTest');

module.exports = function(app){

  app.get('/api/problems', function(req,res){
    Nerd.find(function(err,nerds){
      if(err){
        res.send(err);
      }
      console.log('inside nerd route');
      res.json(nerds);
    });
  });

  app.post('/problems', function(req,res){
    var problem = new Problem();
    console.log("Hit POST request");
    problem.name = req.body.name;
    problem.prompt = req.body.prompt;

    problem.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'New problem added!', data: problem });
    });
  });

  app.post('/problems/select', function(req,res){
    var selectedName = req.body.name.name;
    Problem.findOne({'name':selectedName}, function(err,doc){
      if(err)
        res.send(err);
      console.log("###########################",doc.iterative);
      var testResults = Eval(doc);
      //console.log(res.testResults);
      res.json(testResults);
    });
  });

  app.post('/problems/addSol', function(req,res){
    var _problemName = req.body.name.name;
    var _userSolution = req.body.userSolution;
    console.log("-----------------------------",_userSolution,"--------------------",_problemName);

    //Find doc with matching problem name and add user solution
    Problem.findOne({'name':_problemName}, function (err, doc){
      if(err)
        res.send(err);
      doc.userSolution = _userSolution;
      doc.save();
    });

  });

  app.get('/problems/names', function(req, res) {
    // Use the Beer model to find all beer
    console.log("Hit GET request!");
    Problem.find({},'name',function(err, data) {
      if (err)
        res.send(err);
      console.log(data);
      res.json(data);
    });
  });

  app.get('/problems', function(req, res) {
    // Use the Beer model to find all beer
    console.log("Hit GET request!");
    Problem.find(function(err, data) {
      if (err)
        res.send(err);
      console.log(data);
      res.json(data);
    });
  });  

  app.get('*', function(req,res){
    console.log('inside routes');
    res.sendfile('./public/views/index.html');
  });
};