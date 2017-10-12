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
                   $scope.mywins = 0
                   $scope.yourwins = 0
                   $scope.handvalue = function(card){
                     switch (card) {
                       case 'ACE':
                         return 14;
                         break;
                       case 'KING':
                         return 13;
                         break;
                       case 'QUEEN':
                         return 12;
                         break;
                       case 'JACK':
                         return 11;
                         break;
                       case '10':
                         return 10;
                         break;
                       case '9':
                         return 9;
                         break;
                       case '8':
                         return 8;
                         break;
                       case '7':
                         return 7;
                         break;
                       case '6':
                         return 6;
                         break;
                       case '5':
                         return 5;
                         break;
                       case '4':
                         return 4;
                         break;
                       case '3':
                         return 3;
                         break;
                       case '2':
                         return 2;
                         break;
                       default:
                     }
                   }
                   $scope.cards = []
                   $scope.cardimagesmine = []
                   $scope.cardimagesyours = []
                   $scope.handvalueofmycards = []
                   $scope.handvalueofyourcards = []
                   $scope.getcards = function(){
                     fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=12')
                     .then(function(reponse){
                       console.log('status:',reponse.status);
                       reponse.json().then(function(data){
                         console.log(data.cards);
                         for(var i = 0; i < data.cards.length; i++){
                           if(i < 6){
                             $scope.cardimagesmine.push(data.cards[i].image)
                           } else {
                             $scope.cardimagesyours.push(data.cards[i].image)
                           }
                           data.cards[i].image = 'https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-fournier-505-1_grande.jpg?v=1494194154'
                           $scope.cards.push(data.cards[i])
                         }
                       })
                       console.log($scope.cardimages);
                     })
                     $scope.mycards = []
                     $scope.yourcards = []
                     for(let i = 0; i <= 5; i++){
                       $scope.mycards.push($scope.cards[i])
                       $scope.handvalueofmycards.push($scope.handvalue($scope.cards[i].value))
                     }
                     for(let i = 6; i <= 11; i++){
                       $scope.yourcards.push($scope.cards[i])
                       $scope.handvalueofyourcards.push($scope.handvalue($scope.cards[i].value))
                     }
                     console.log($scope.handvalueofmycards);

                   }

                   $scope.winner
                   $scope.showwinner = function(){
                     let counter = 0
                     if($scope.handvalueofmycards[0] > $scope.handvalueofyourcards[0]){
                       $scope.mycards[0].image = $scope.cardimagesmine[0]
                       $scope.yourcards[0].image = $scope.cardimagesyours[0]
                       console.log('my card:' , $scope.handvalueofmycards[0]);
                       console.log('your card:' , $scope.handvalueofyourcards[0]);
                       $scope.mywins++
                       $scope.winner = 'I win this round!'
                       setInterval(function(){
                         if(counter === 0){
                           $scope.mycards.shift()
                           $scope.yourcards.shift()
                           $scope.cardimagesmine.shift()
                           $scope.cardimagesyours.shift()
                           $scope.handvalueofmycards.shift()
                           $scope.handvalueofyourcards.shift()
                         }
                         counter++;
                       }, 3000)

                     } else {
                       $scope.mycards[0].image = $scope.cardimagesmine[0]
                       $scope.yourcards[0].image = $scope.cardimagesyours[0]
                       console.log('my card:' , $scope.handvalueofmycards[0]);
                       console.log('your card:' , $scope.handvalueofyourcards[0]);
                       $scope.yourwins++
                       $scope.winner = 'You win this round!'
                       setInterval(function(){
                         if(counter === 0){
                           $scope.mycards.shift()
                           $scope.yourcards.shift()
                           $scope.cardimagesmine.shift()
                           $scope.cardimagesyours.shift()
                           $scope.handvalueofmycards.shift()
                           $scope.handvalueofyourcards.shift()
                         }
                         counter++
                       }, 3000)

                     }
                   }
                   $scope.resetdeck = function(){
                     $scope.cards = []
                     $scope.cardimages = []
                     $scope.handvalueofmycards = []
                     $scope.handvalueofyourcards = []
                     $scope.mycards = []
                     $scope.yourcards = []
                     $scope.cardimagesmine = []
                     $scope.cardimagesyours = []
                     $scope.winner = ''
                     $scope.mywins = 0
                     $scope.yourwins = 0;
                   }
                 })
                 .controller('aboutCTRL',function($scope){

                 })
                 .controller('contactCTRL',function($scope){

                 })
