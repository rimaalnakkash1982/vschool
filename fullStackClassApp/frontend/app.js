var app = angular.module("ClassApp", ["ngRoute"]);

app.controller("MainController", ["$scope", "HttpService", function($scope, HttpService){
  $scope.test = HttpService.test;

}]);