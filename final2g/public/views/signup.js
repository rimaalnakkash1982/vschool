//var app = angular.module("app.signup", ["ngRoute"]);
//app.config(function ($routeProvider) {
//    $routeProvider.when("/signup", {
//        templateUrl: "/veiws/signup.html",
//        controller: "signupCtrl"
//    })
//
//});
//
//app.controller("signupCtrl", function ($scope, authServ) {
//    $scope.userinput = {};
//    $scope.signup = function () {
//        console.log($scope.userinput)
//        var data = {
//            username: $scope.userinput.username,
//            password: $scope.userinput.password1
//        }
//        $scope.userinput = {};
//        authServ.getAuth(data).then(function (response) {
//            po("you have signed up")
//        }, function (response) {
//            console.log(response.status)
//        })
//    }
//    
//});