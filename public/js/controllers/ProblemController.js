problemApp.controller('ProblemController', function($rootScope, $scope, ProblemFactory){
      
  $scope.problems = {};
  $scope.err = '';

    console.log('inside controller!');
    ProblemFactory.getProblems().then(function(data){
      $scope.problems = data.data;
    });    
  
});


// $scope.getProblems = function(){
//   ProblemService.success(function(data){
//     console.log(data);
//     $scope.problems = data;
//   }).error(function(data,status){
//     console.log("There was an error.");
//     $scope.err = "Something went wrong";
//   })


      // $scope.addProblem = function(){
      //   var newProblem = new ProblemService({
      //     name: this.name,
      //     prompt: this.prompt
      //   });
      // };

      // newProblem.$save(function(response){
      //   $location.path('/problems');
      //})
