angular.module('ProblemService',[]).factory('Problem', ['$http', function($http){

  return {
    get: function(){
      return $http.get('/problems');
    }
  }

}]);