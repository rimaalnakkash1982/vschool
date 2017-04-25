var app = angular.module("shopModule", []);

app.directive("itemInShop", function () {
    return {
        scope: {
            name: "=",
            currency: "@",
            amount: "=",
            price:"="
        },
        templateUrl: "js/directive/name.html",
        link:function(scope,elem,attrs){
            var btn=elem.find("button");
            btn.bind("click",function(){
                console.log("nananan")
                scope.total=scope.amount * scope.price;
                scope.$apply();
            });
        }
      
    }
});