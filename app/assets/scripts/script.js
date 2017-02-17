(function(){
  var remainderApp = angular.module("remainder",[]);
      //login controller
      remainderApp.controller("login", function($scope){

      });
      // register controller
      remainderApp.controller("registeration", function($scope){
        $scope.submitForm = function(isValid){
          if(isValid)
            console.log("form submitted successfully!!")
        }
      });

      remainderApp.controller("moviesController", function($scope){
        $scope.movies = ["XXX", "YYY", "ZZZ", "WWW"];
      });

      remainderApp.directive("movieName", function(){
        return{
          restrict: "A",
          transclude: 'true',
          template: "<span ng-transclude></span>",
          link: function(scope, element, attributs){
            console.log(attributs.title)
          }
        }
      });

      remainderApp.directive("ngCity", function(){
        return{
          restrict: "A",
          require: "ngModel",
          template: "<h1>You have entered city name: {{city}}</h1>",
          compile: function(element, attributs){

          }
        }
      });

      // remainderApp.directive("spanClass", function(){
      //   return{
      //     restrict: "EA",
      //     template: "<div>Welcome to custom directive</div>"
      //   }
      // });
})();
