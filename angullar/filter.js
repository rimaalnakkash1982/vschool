var app = angular.module("myApp", []);
app.filter("search", function () {
    return function (input, term) {
        console.log(term)
        var result = [];
        for (var i = 0; i < input.length; i++) {
            if (input[i].name.indexOf(term) != -1) {
                result.push(input[i]);
            }
        }
        return result;
    }
});
app.controller("ctrl", function ($scope) {
    $scope.searchItem = "";
    $scope.data = [{
            name: "cat.png",
            size: 10
    },
        {
            name: "book.pdf",
            size: 10
},
        {
            name: "car.png",
            size: 8
                  },
        {
            name: "file.js",
            size: 5
                  }
  ]
});