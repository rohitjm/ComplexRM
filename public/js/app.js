problemApp = angular.module('problemApp',['ngRoute'])
.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/public/views/index.html',
    controller: 'ProblemController'
  })
});



