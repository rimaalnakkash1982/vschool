var app = angular.module("myApp", []);
app.service("red", function () {
    this.add = function (nb) {
        nb++;
        this.finalRed = nb;
    }
    this.remove = function (nb) {
        nb--;
        this.finalRed = nb;
    }
});
app.service("blue", function () {
    this.add = function (nb) {
        nb++;
        this.finalblue = nb;
    }
    this.remove = function (nb) {
        nb--;
        this.finalblue = nb;
    }
});
app.controller("mainController", function (blue, red, $scope) {
    $scope.num = 100;
    $scope.num2 = 100;
    $scope.red = function () {
        red.add($scope.num);
        blue.remove($scope.num2);
        if (red.finalRed == 0 || blue.finalblue == 0) {
            $scope.num = 100;
            $scope.num2 = 100;
        }
        else {
            $scope.num = red.finalRed;
            $scope.num2 = blue.finalblue;
        }
    }
    $scope.blue = function () {
        red.remove($scope.num);
        blue.add($scope.num2);
        if (red.finalRed == 0 || blue.finalblue == 0) {
            $scope.num = 100;
            $scope.num2 = 100;
        }
        else {
            $scope.num = red.finalRed;
            $scope.num2 = blue.finalblue;
        }
    }
});