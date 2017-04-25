var add=function (a,b){
    return a+b;
}
var multi=function (a,b){
    return a*b;
}
var div=function (a,b){
    return a/b;
}
var sub=function (a,b){
    return a-b;
}
var power=function(a,b){
    return Math.pow(a,b);
}
module.exports={
    add:add,
    multi:multi,
    sub:sub,
    div:div,
    power:power
}