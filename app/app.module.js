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
                   $scope.cards = []
                   $scope.getcards = function(){
                     fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
                     .then(function(reponse){
                       console.log('status:',reponse.status);
                       reponse.json().then(function(data){
                         console.log(data.cards);
                         for(var i = 0; i < data.cards.length; i++){
                           $scope.cards.push(data.cards[i])
                         }
                       })
                     })
                     $scope.mycards = []
                     $scope.yourcards = []
                     for(let i = 1; i <= 26; i++){
                       $scope.mycards.push($scope.cards[i])
                     }
                     for(let i = 27; i <= 52; i++){
                       $scope.yourcards.push($scope.cards[i])
                     }
                   }

                 })
                 .controller('aboutCTRL',function($scope){

                 })
                 .controller('contactCTRL',function($scope){

                 })
