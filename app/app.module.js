var app = angular.module('app',["ngRoute"])
                 .config(function($routeProvider){
                   $routeProvider
                   .when('/home',{
                     templateUrl:'/templates/home.html',
                     controller:'homeCTRL'
                   })
                   .when('/about',{
                     templateUrl:'/templates/about.html',
                     controller:'aboutCTRL'
                   })
                   .when('/contact',{
                     templateUrl:'/templates/contact.html',
                     controller:'contactCTRL'
                   })
                   .otherwise({
                     redirectTo:'/home'
                   })
                 })
                 .controller('homeCTRL',function($scope){
                   $scope.title = 'Welcome to War'
                 })
                 .controller('aboutCTRL',function($scope){

                 })
                 .controller('contactCTRL',function($scope){

                 })
