var app = angular.module("app.home", ["ngRoute","appRouter"]);
app.config(function($routeProvider){
    $routeProvider.when("/Home", {
        templateUrl:"/view/home/home.html",
        controller:"myCtrl"
    })
 
});

app.controller("myCtrl", function ($scope, todoReq) {
  
    $scope.add = function () {
        var data = {
            title: $scope.title,
            description: $scope.description,
            likes: 0,
            disLike: 0,
            comments: []
        }
        todoReq.postData(data).then($scope.loadData, function (error) {
            console.log(error.status);
        });
        $scope.title = "";
        $scope.description = "";
    }
});

//    $scope.upp = function (id, likes) {
//        todoReq.editData(id, {
//            likes: likes
//        }).then($scope.loadData, function (error) {
//            console.log(error.status);
//        });
//    }
//    $scope.down = function (id, disLike) {
//        disLike++;
//        todoReq.editData(id, {
//            disLike: disLike
//        }).then($scope.loadData, function (error) {
//            console.log(error.status);
//        });
//
//    };

 
    //    $scope.edit = function (id, editinput) {
    //        var data = {
    //            name: editinput
    //        }
    //        console.log(editinput);
    //        todoReq.editData(id, data).then(function () {
    //            console.log(data.name);
    //        }, function (error) {
    //            console.log(error.status);
    //        });
    //        $scope.edititem = "";
    //        $scope.loadData();
    //    }
    //    $scope.deleteItem = function (_id) {
    //        todoReq.deleteData(_id).then($scope.loadData, function (error) {
    //            console.log(error.status);
    //        });
    //    }
