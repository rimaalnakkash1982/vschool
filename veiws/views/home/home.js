var app=angular.module("app.home",["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
     templateUrl:"./views/home/home.html",
        controller:"homeCtrl"
    })
});
app.controller("homeCtrl",function($scope){
 $scope.test="hiba";
 console.log("hi");
});