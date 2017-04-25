var app =angular.module("myApp",[]);

app.service("getData",function($http){
    this.gtes = function(){
        return $http.get("http://localhost:8080/menu");
    }
})

app.controller("mainController",function($scope,getData){
    $scope.data = [];
    $scope.loadData = function(){
        getData.gtes().then(function(respones){
            $scope.data = respones.data
        },function(error){
            alert(error.status);
        })
    }
})