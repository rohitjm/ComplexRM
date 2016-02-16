angular.module('PrblmCtrl',[])
  .controller('ProblemController', function($scope, $http, ProblemService){
      
      $scope.greet = "hello there, lets do this thing!";
      $scope.err = '';

      $scope.getProblems = function(){
        ProblemService.success(function(data){
          console.log(data);
          $scope.problems = data;
        }).error(function(data,status){
          console.log("There was an error.");
          $scope.err = "Something went wrong";
        })
      };

      // $scope.addProblem = function(){
      //   var newProblem = new ProblemService({
      //     name: this.name,
      //     prompt: this.prompt
      //   });
      // };

      // newProblem.$save(function(response){
      //   $location.path('/problems');
      //})

});