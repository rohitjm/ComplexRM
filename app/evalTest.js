module.exports = function(func){

  console.log("inside eval!");
  //console.log("the whole doc################: ", func.iterative);
  var results = [];

  for(var i = 10; i <= 10000; i+=10){

    var start = new Date().getTime();
      var n = i;
      eval(func.iterative);
    var end = new Date().getTime();

    var time = end - start;
    results.push(time);
  }
  //console.log(results);
  return results;
};