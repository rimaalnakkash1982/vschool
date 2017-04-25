//var app=angular.module("myApp",[]);
//app.service("calculate",function(){
// this.sum=0;
//    this.addNum= function(a, b){
//     this.sum= a+b;
// }
//});
//app.service("calculate",function(){
// this.mutiNum= function(){
//      this.sum= a*b;
// }
//});
//app.controlle("myApp",function($scope){
//    calculate.addNum=$cope.add()
//});
//
var app = angular.module("app", []);

app.controller("ctrl", function ($scope) {

  $scope.add = function () {

      $scope.sum = ($scope.num1 + $scope.num2);

  }
})

app.controller("ctrl2", function ($scope) {

  $scope.times = function () {

      $scope.time = ($scope.num1 * $scope.num2);

  }
}

)