angular.module('ComplexRM',[])
  .controller('MainCtrl', function($scope){
    $scope.greet = "hello there, lets do this thing!";

    $scope.test = function(){
      console.log($scope.userEntry);
    };
  });