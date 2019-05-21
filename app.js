var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){

    $routeProvider

    .when('/',{
        templateUrl : '/pages/login.html',
        controller : 'mainController'

    })
    .when('/signup',{
        templateUrl : 'pages/signup.html',
        controller : 'SignupController'
    })

    .when('/login',{
        templateUrl : 'pages/login.html',
        controller : 'LoginController'
    });

}]);


myApp.controller('mainController',['$scope','$log','$routeParams',function($scope,$log,$routeParams){


}]);
myApp.controller('SignupController',['$scope','$log','$routeParams',function($scope,$log,$routeParams){



}]);
myApp.controller('LoginController',['$scope','$log','$routeParams',function($scope,$log,$routeParams){



}]);