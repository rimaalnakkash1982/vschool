var app=angular.module("authmodule",[]);
app.service("authServ",function($http){
 this.getAuth=function(data){
   return $http.post("http://localhost:8080/auth/signup", data);
 }
   this.postAuth = function (data) {
        return $http.post("http://localhost:8080/auth/signin", data);
    }
});