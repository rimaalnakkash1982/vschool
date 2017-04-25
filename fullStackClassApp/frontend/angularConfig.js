var app = angular.module("ClassApp");

app.config(function($routeProvider) {

  $routeProvider.when("/", {
      templateUrl: "templates/home.html",
    controller: "MainController"
    })
    .when("/class", {
      templateUrl: "templates/class.html",
      controller: "ClassController"
    })
    .when("/editclass", {
      templateUrl: "templates/editClass.html",
      controller: "EditClassController"
    })

});