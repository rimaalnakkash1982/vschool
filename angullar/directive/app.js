var app = angular.module("myApp", ["shopModule"]);

app.controller("ctrl", function ($scope) {
    $scope.items = [];
    $scope.addShopItem = function () {
        $scope.items.push({
            name: $scope.name,
            amount: $scope.amount,
            price:$scope.price
        });
        $scope.name = "";
        $scope.amount = 0;
        $scope.price=0;
    }
    $scope.shopDropDown = ["vegetabels", "meat", "chickens","cheese","labneh","fish","ajax","odax","flash"];
});