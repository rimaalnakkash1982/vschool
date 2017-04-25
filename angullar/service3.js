var app = angular.module("myApp", []);
app.service("addData", function () {
    this.arr = [];
    this.addPoki = function (name) {
        this.arr.push(name);
        return   this.arr;
    }
    this.removeData = function (name) {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === name) {
                this.arr.splice(i, 1)
            }
        }
    }
});
app.controller("mainController", function (addData, $scope) {

    $scope.add = function (name) {
        $scope.arrayPoke = addData.addPoki($scope.name);
    }
    $scope.remove = function (name) {
        addData.removeData($scope.name);
    }
    $scope.name="";
});