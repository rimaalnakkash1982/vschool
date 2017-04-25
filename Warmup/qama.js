var nonConvertion = function (arr){
var sum=0;
for (var i=0;i<arr.length-1;i++){
    sum += arr[i];
}
    return sum;
}
var arr=[1,2,3,4,5];
console.log (nonConvertion(arr));