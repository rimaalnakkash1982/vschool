var app = angular.module("myApp", []);
app.controller("mainController", function($scope) {
        console.log("click")
    $scope.arr=[];
    $scope.submit= function(){
        console.log("click")
      $scope.arr.push($scope.name);
        $scope.name="";
    
    }
});