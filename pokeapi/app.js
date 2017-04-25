var app = angular.module("app", []);
app.service("pokiServ", function ($http) {
    this.getPoki = function (num){
    return $http.get("http://pokeapi.co/api/v2/pokemon/"+num)
    }
});
app.controller("pokictrl", function ($scope, pokiServ) {
    $scope.add = function () {
        pokiServ.getPoki($scope.pokiNum).then(function (response) {
            $scope.name = response.data.name;
        }, function (error) {
            alert(error.status)
        })
    }
})