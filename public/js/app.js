var app = angular.module('ComplexMain',[
  'PrblmCtrl',
  'PrblmSer',
])
.config(function($routeProvider, $httpProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'public/views/index.html',
    controller: 'ProblemController'
  })
});

app.factory('ProblemService', '$http', function($http){
  return {
    fetchProblems: function () {
      return $http.get('/problems')
    }
  }
});


