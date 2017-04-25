var app = angular.module("myApp", []);
app.service("listServ", function ($http) {
    this.getToDo = function () {
        return $http.get("http://localhost:8080/friend");
    }
    this.deleteItem = function (id) {
        return $http.delete("http://localhost:8080/friend" + id);
    }
      this.updateD = function (id,data) {
        return $http.put("http://localhost:8080/friend" + id , data);
      }
       this.postData = function (data) {
        return $http.post("http://localhost:8080/friend", data);
      }
});
    
app.controller("mainController", function ($scope, listServ) {
    $scope.getData = function () {
        listServ.getToDo().then(function (response) {
            $scope.todoList = response.data;
        }, function (error) {
            alert(error.statusText)
        })
    }
    $scope.remove = function (id) {
            listServ.deleteItem(id).then(
                listServ.getToDo(), function (error) {
                alert(error.statusText)
            })
        }
       $scope.edit = function (id,object) {
        var data = {
            title: object
        }
        console.log(object);
        listServ.updateD(id,data).then(function () {
            $scope.todo = data.title;
        }, function (error) {
            console.log(error.status);
        })};
        $scope.update =""; 
    
              $scope.postD = function (data) {
                  var data = {
                      title : $scope.post
                  }
        listServ.postData(data).then(function () {
            $scope.postD = data;
            console.log(data.title);
        }, function (error) {
            console.log(error.status);
        });
        $scope.post ="";
       }
       });