problemApp.controller('ProblemController', function($rootScope, $scope, ProblemFactory){
      
  $scope.problems = {};
  $scope.err = '';
  $scope.code = '';

  console.log('inside controller!');

  ProblemFactory.getProblemNames().then(function(data){
    $scope.problems = data.data;
  });

  $scope.getProblem = function(){
    ProblemFactory.selectedProblem({
      "name":$scope.myProblem
    }).then(function(data){
      console.log(data);
      $scope.code = data.data;
    });    
  };

  $scope.addSolution = function(mySolution){
    ProblemFactory.addSolution({
      "name":$scope.myProblem,
      "userSolution":mySolution.toString()
    }).then(function(data){
      console.log("Successfully added solution");
    })
  };
});
