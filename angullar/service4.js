var app = angular.module("myApp", ["mystore"]);
app.controller("mainController", function (store, $scope) {
     console.log("cont")
    $scope.storeItem=store.item;
    $scope.add = function(){
        store.addItem($scope.name,$scope.cost);
       $scope.total = store.total;  
    }   
});