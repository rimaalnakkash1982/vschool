var app = angular.module("myApp", []);
app.service("newSer", function () {
    this.imgArr = [];
    this.add = function (object) {
        this.imgArr.push({
            img: object.img,
            desc: object.desc,
            title: object.title
        });
    }
});
app.controller("mainController", function (newSer, $scope) {
    $scope.arr = newSer.imgArr;
    $scope.submit = function () {
        newSer.add({
            img: $scope.img,
            desc: $scope.desc,
            title: $scope.title
        })
        $scope.title = "";
        $scope.desc = "";
        $scope.img = "";


    }

});