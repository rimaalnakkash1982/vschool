var app = angular.module("ClassApp");

app.controller("ClassController", ["$scope", "HttpService", function($scope, HttpService) {
  $scope.studentList = [];

  $scope.getStudents = function() {
    HttpService.getStudents().then(function(data) {
      $scope.studentList = data;
    })
  };

  $scope.deleteStudent = function(studentID, index){
    HttpService.deleteStudent(studentID).then(function(data){
      $scope.studentList.splice(index, 1);
    })
  }

  $scope.getStudents();

}]);


app.controller("EditClassController", ["$scope", "HttpService", function($scope, HttpService) {
  $scope.newStudent = {};
  $scope.test = "Hello!";
  $scope.addStudent = function() {
    console.log("clicked");
    HttpService.postStudent($scope.newStudent).then(function(data) {
      $scope.submittedStudent = data;
      console.log($scope.submittedStudent);
    })
  }

}]);