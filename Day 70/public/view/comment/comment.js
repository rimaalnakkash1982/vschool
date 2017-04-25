var app = angular.module("app.comment", ["ngRoute","appRouter"]);
app.config(function($routeProvider){
    $routeProvider.when("/comments", {
        templateUrl:"view/comment/comments.html",
        controller:"commentCtrl"
    })
 
});

app.controller("commentCtrl",function($scope,todoReq){
       $scope.addComment = function (id,text) {
        todoReq.editData(id, {
            comments: text
        }).then($scope.loadData, function (error) {
            console.log(error.status);
        });
    };
      $scope.loadData = function () {
        todoReq.getData().then(function (response) {
            $scope.todoItems = response.data.data;
        }, function (response) {
            console.log(response.status);
        })
    };
     $scope.upp = function (id, likes) {
         likes++
        todoReq.editData(id, {
            likes:likes
        }).then($scope.loadData, function (error) {
            console.log(error.status);
        });
    }
    $scope.down = function (id, disLike) {
        disLike++;
        todoReq.editData(id, {
            disLike: disLike
        }).then($scope.loadData, function (error) {
            console.log(error.status);
        });

    };
       $scope.remove = function (id,data) {
            todoReq.deleteData(id).then($scope.loadData, function (error) {
            console.log(error.status);
        });
        }

});