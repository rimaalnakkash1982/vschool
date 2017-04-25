var app = angular.module("app.addData", ["ngRoute", "appServ"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/addData", {
        templateUrl: "views/addData.html",
        controller: "onePostCtrl"
    })
});


app.controller("onePostCtrl", function ($scope, $routeParams, todoReq) {
    var id = $routeParams.id;
    console.log("home")
    $scope.userInput = {};
    $scope.todoItem  = [];
    $scope.getDatas = function () {
        todoReq.getData().then(function (response) {
            var temData = response.data.data;
            $scope.todoItem = [];
            for (var i = 0; i < temData.length; i++) {
                $scope.todoItem.push({
                   title:$scope.userInput.title,
                    description:$scope.userInput.descrption,
                    image:$scope.userInput.image
                })
            }
        }, function (response) {
            console.log(response.status)
        })
    };
    $scope.addItem = function (data) {
        var data = {
            name: $scope.userInput.name
            , cost: $scope.userInput.cost
            , isDone: false
        }
        todoReq.postData(data).then(function (response) {
            $scope.getDatas();
            $scope.userInput = {};
        }, function (response) {
            console.log(response.status)
        })
    };
    $scope.remove = function (id) {
        console.log(id)
        todoReq.deleteData(id).then(function (response) {
            $scope.getDatas()
        }, function (response) {
            console.log(response.status)
        })
    };
    $scope.toggleEdit = function (index) {
        $scope.todoItem[index].isEdit = !$scope.todoItem[index].isEdit;
    };
    $scope.save = function (id, data) {
        todoReq.editData(id, data).then(function (response) {
            $scope.getDatas()
        }, function (response) {
            console.log(response.status)
        })
    };    
    
    
    $scope.loadDatabyId = function () {
        todoReq.getDataById(id).then(function (response) {
            var dataGet = response.data.data;
            $scope.userInput = dataGet;
            $scope.userInput = {
                _id: dataGet._id,
                title: dataGet.title,
                description: dataGet.description,
                image: dataGet.image,
                upVoted: dataGet.upVoted || 0,
                downVoted: dataGet.downVoted || 0,
                Comment: dataGet.Comment,
                isShowingComment: false,
                isShowingAddComment: false,
                isShowingEdit: false
            }
        }, function (response) {
            console.log(response.status);
        })
    };

    //upVoted
    $scope.like = function () {
        $scope.userInput.upVoted++;
        var data = {
            upVoted: $scope.userInput.upVoted
        }
        todoReq.upVoted(id, data).then($scope.loadDatabyId, function (respone) {
            console.log(respone.status)
        })
    }

    //downVoted
    $scope.unlike = function () {
        $scope.userInput.downVoted++;
        var data = {
            downVoted: $scope.userInput.downVoted
        }
        todoReq.downVoted(id, data).then($scope.loadDatabyId)
    }

    //Show/Hide addComment
    $scope.showHideAddComment = function () {

        $scope.userInput.isShowingAddComment = !$scope.userInput.isShowingAddComment;
    }

    //Show/Hide Edit
    $scope.editStatus = function () {
        $scope.userInput.isShowingEdit = !$scope.userInput.isShowingEdit;
    }
    
       //Delete
    $scope.remove = function (_id) {
            todoReq.deleteData(_id).then($scope.loadDatabyId, function (error) {
                console.log(error.status);
            });
                    SweetAlert.swal({
   title: "Are you sure?",
   text: "Your will not be able to recover this imaginary file!",
   type: "warning",
   showCancelButton: true,
   confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, delete it!",
   cancelButtonText: "No, cancel plx!",
   closeOnConfirm: false,
   closeOnCancel: false }, 
function(isConfirm){ 
   if (isConfirm) {
      SweetAlert.swal("Deleted!", "Your imaginary file has been deleted.", "success");
   } else {
      SweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");
   }
        
     }
);
    //Edit
    $scope.edit = function () {
            var data = {
                title: $scope.userInput.title,
                description: $scope.userInput.description
            };

            todoReq.editData(id, data).then(function () {
                $scope.loadDatabyId();
                $scope.editStatus();
            }, function (error) {
                console.log(error.status);
            });
        }
        //Show/Hide Comment
    $scope.showHideComment = function (_id) {

            $scope.userInput.isShowingComment = !$scope.userInput.isShowingComment;
        }
        // Remove Specific Comment
    $scope.removeComment = function (index) {
            var data = {
                index: index
            }
            todoReq.deleteComment(id, data).then($scope.loadDatabyId)
            SweetAlert.swal({
   title: "Are you sure?",
   text: "Your will not be able to recover this imaginary file!",
   type: "warning",
   showCancelButton: true,
   confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, delete it!",
   cancelButtonText: "No, cancel plx!",
   closeOnConfirm: false,
   closeOnCancel: false }, 
function(isConfirm){ 
   if (isConfirm) {
      SweetAlert.swal("Deleted!", "Your imaginary file has been deleted.", "success");
   } else {
      SweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");
   }
});
        }
    
        //addcomment
    $scope.addComment = function (comment) {
        var data = {
            Comment: comment
        }
        todoReq.Comment(id, data).then($scope.loadDatabyId);
    }
}})