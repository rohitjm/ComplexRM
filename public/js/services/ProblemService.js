problemApp.factory('ProblemFactory', function($http){
  var problemService = {};
  problemService.getProblems = function(){
    console.log('inside getProblems')
    return $http.get('/problems');  
  }
  return problemService;
});