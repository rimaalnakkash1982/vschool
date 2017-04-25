var app = angular.module("myApp", []);
app.service("listServ", function ($http) {
    this.getToDo = function () {
        return $http.get("http://api.vschool.io/rimaalnakkash/todo/");
    }
    this.deleteItem = function (id) {
        return $http.delete("http://api.vschool.io/rimaalnakkash/todo/" + id);
    }
      this.updateD = function (id,data) {
        return $http.put("http://api.vschool.io/rimaalnakkash/todo/" + id , data);
      }
       this.postData = function (data) {
        return $http.post("http://api.vschool.io/rimaalnakkash/todo/", data);
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
               



    