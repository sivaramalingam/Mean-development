'use strict';
(function(){
  var remainderApp = angular.module("remainder", ['ngRoute']);
      //Routes
      remainderApp.config(['$routeProvider',function($routeProvider){
        $routeProvider.
          when("/login", {
            templateUrl: 'templates/login.htm',
            controller: 'loginController',
            reload: true
          }).
          when("/register", {
            templateUrl: 'templates/register.htm',
            controller: "registerationController",
            reload: true
          }).
          otherwise({
            redirectTo: "/home"
          });
      }]);

      //set rootscope in module
      remainderApp.run(function($rootScope){
        $rootScope.visible = true;
      });

      //login controller
      remainderApp.controller("loginController", function($scope, $rootScope, b2homeService, $http){
        $rootScope.visible = false;
        $scope.msg = "Hi, Welcome to login page, please give your username and password below."
        $scope.go = function(path){
          b2homeService.go(path);
        }
        $scope.loginSubmit = function(isValid){
          if(isValid){
            $http.get("/api/")
            console.log($scope.loginform)
            alert("logged successfully");
            $scope.loginform = {};
            $scope.remainderLogin.$setUntouched();
          }else{
            angular.forEach('remainderLogin', function(err){
              console.log(err)
            })
          }
        }
      });

      // register controller
      remainderApp.controller("registerationController", function($scope, $rootScope, b2homeService){
        $rootScope.visible = false;

        $scope.submitForm = function(isValid){
          if(isValid)
            console.log("form submitted successfully!!")
        }

        $scope.go = function(path){
          b2homeService.go(path);
        }
        // $scope.helloServ = firstService.helloService();
        // $scope.sumServ = firstService.sumService();
        // $scope.firstfact = firstfactory;
      });

      //remainder controller
      remainderApp.controller("remainderController", function($scope, $rootScope){
         $rootScope.visible = true;
        //
        // $scope.clickEvent = function(){
        //   alert();
        // }
      });

      //b2home service
      remainderApp.service("b2homeService", function($location, $rootScope){
        this.go = function(path){
          $rootScope.visible = true;
          $location.path(path);
          return;
        }
      })

      remainderApp.controller("moviesController", function($scope){
        $scope.movies = ["XXX", "YYY", "ZZZ", "WWW"];
      });

      remainderApp.service("firstService", function(){
        this.helloService = function(){
          return "hello world!!!";
        }
        this.sumService = function(){
          var x = 10;
          return x + 25;
        }
      });

      remainderApp.factory("firstfactory", function(){
        var x = {}, sum = 0;
        x.addSum = function(){
          var y= 15;
            sum = y+10;
            return sum;
        }
        return x.addSum();
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
