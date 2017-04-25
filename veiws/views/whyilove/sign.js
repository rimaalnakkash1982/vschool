var app=angular.module("app.sign",["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/why", {
     templateUrl:"./views/whyilove/sign.html",
        controller:"signctrl"
    })
});

app.controller("signctrl", function($scope){
   $scope.submit=function(){
 alert($scope.schoolName+scope.date+$scope.name+$scope.fistName+$scope.about)
   } 
   $scope.schoolName="";
   scope.date="";
   $scope.name="";
   $scope.fistName="";
});