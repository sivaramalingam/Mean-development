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
})();
