var app = angular.module("myApp" ,[]);
app.service("listServ", function ($http) {
    this.getSpeak = function (){
      
return $http.get("http://api.vschool.io:6543/hitlist.json")  
    }
    
});
app.controller("maincontroller", function ($scope, listServ) {
    $scope.click = function () {
        listServ.getSpeak().then(function (response) {
            $scope.list = response.data;
        }, function (error) {
            alert(error.statusText)
        })
    }
})