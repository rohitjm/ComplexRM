angular.module('PrblmSer',[])
.factory('ProblemService',function($http){
  return $http.get('/problems');
});