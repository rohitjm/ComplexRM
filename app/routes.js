var Problem = require('./models/problem');

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

  app.get('/problems', function(req, res) {
    // Use the Beer model to find all beer
    console.log("Hit GET request!");
    Problem.find(function(err, data) {
      if (err)
        res.send(err);

      res.json(data);
    });
  });

  app.get('*', function(req,res){
    console.log('inside routes');
    res.sendfile('./public/views/index.html');
  });
};