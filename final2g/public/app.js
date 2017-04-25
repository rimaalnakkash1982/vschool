var app=angular.module("app",["ngRoute","app.home","app.signin","app.addPost","app.addData"]);
app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix("");
    $routeProvider.when("/", {
        redirectTo: "/home"
    }).otherwise("/", {
        redirectTo: "/home"
    })
});
