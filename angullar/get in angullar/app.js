var app = angullar.module("myApp" []);
app.service("", function ($http) {
    this.getSpeak = function ()
    return $http.get("http://worldclockapi.com/api/json/utc/now")
});
app.controller("r", function ($scope, listServ) {
    $scope.click = function () {
        listServ.getSpeak($scope.speak).then(function (response) {
            $scope.value = response.data.currentDateTime;
        }, function (error) {
            alert(error.statusText)
        })
    }
})