problemApp.factory('ProblemFactory', function($http){
  var problemService = {};

  problemService.getProblemNames = function(){
    console.log('inside getProblems')
    return $http.get('/problems/names');  
  };

  problemService.selectedProblem = function(selection){
    console.log("inside selected problem!");
    return $http.post('/problems/select',selection);
  };

  problemService.addSolution = function(userSolution){
    return $http.post('/problems/addSol',userSolution);
  };

  return problemService;
});