var app = angular.module("app.home", ["ngRoute", "appServ", "authmodule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl:"views/home.html"
        , controller: "homeCtrl"
    })
});
app.controller("homeCtrl", function ($scope, todoReq) {
//    console.log("home")
//    $scope.userInput = {};
//    $scope.todoItem = [];
//    $scope.getDatas = function () {
//        todoReq.get().then(function (response) {
//            var temData = response.data.data;
//            $scope.todoItem = [];
//            for (var i = 0; i < temData.length; i++) {
//                $scope.todoItem.push({
//                    _id: temData[i]._id
//                    , name: temData[i].name
//                    , cost: temData[i].cost
//                    , isDone: temData[i].isDone
//                    , isEdit: false
//                })
//            }
//        }, function (response) {
//            console.log(response.status)
//        })
//    };
//    $scope.addItem = function (data) {
//        var data = {
//            name: $scope.userInput.name
//            , cost: $scope.userInput.cost
//            , isDone: false
//        }
//        todoReq.postData(data).then(function (response) {
//            $scope.getDatas();
//            $scope.userInput = {};
//        }, function (response) {
//            console.log(response.status)
//        })
//    };
//    $scope.remove = function (id) {
//        console.log(id)
//        todoReq.deleteData(id).then(function (response) {
//            $scope.getDatas()
//        }, function (response) {
//            console.log(response.status)
//        })
//    };
//    $scope.toggleEdit = function (index) {
//        $scope.todoItem[index].isEdit = !$scope.todoItem[index].isEdit;
//    };
//    $scope.save = function (id, data) {
//        todoReq.editData(id, data).then(function (response) {
//            $scope.getDatas()
//        }, function (response) {
//            console.log(response.status)
//        })
//    };
});