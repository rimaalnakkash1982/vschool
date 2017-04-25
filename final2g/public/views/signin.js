var app = angular.module("app.signin", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/signin", {
        templateUrl: "views/signin.html",
        controller: "signinCtrl"
    })

});
app.controller("signinCtrl", function ($scope, authServ) {
    $scope.userinput = {};
    $scope.signin = function () {
        console.log($scope.userinput)
        var data = {
            username: $scope.userinput.username,
            password: $scope.userinput.password
        }
        $scope.userinput = {};
        authServ.postAuth(data).then(function (response) {
            alert("you have signed in")
        }, function (response) {
            console.log(response.status)
        })
    }
    
});