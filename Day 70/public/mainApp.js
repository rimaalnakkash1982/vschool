var app=angular.module("app",["ngRoute","app.home","app.comment"]);
app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix("");
    $routeProvider.when("/", {
        redirectTo: "/Home"
    }).otherwise("/", {
        redirectTo: "/Home"
    })
});
