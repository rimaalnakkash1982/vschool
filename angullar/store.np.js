var store = angular.module("mystore", []);
store.service("store", function () {
    this.item = [];
    this.total = 0;
    this.addItem = function (name, cost) {
        this.item.push({
            name: name,
            cost: cost
        })
         this.total += cost
    }
   
});