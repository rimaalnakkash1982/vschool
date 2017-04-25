var app = angular.module("ClassApp");

app.service('HttpService', function($http) {

  this.getStudents = function() {
    return $http.get("http://localhost:8000/class/").then(function(response) {
      return response.data;
    })
  };

  this.postStudent = function(newStudentObect){
    console.log(newStudentObect);
    return $http.post("http://localhost:8000/class/",newStudentObect).then(function(response){
      return response.data;
    })
  }

  this.deleteStudent = function(studentID){
    return $http.delete("http://localhost:8000/class/" + studentID).then(function(response){
      return response.data;
    })
  };

});