 var enenArray=[];
function createEvenArray(highNumer){
    for ( var i=2 ; i<= highNumer;i+=2){
    if ( i%2==0){
       enenArray.push(i); 
    }
   } 
};

function createOddArray(highNumer){
    for ( var i=2 ; i<=highNumer;i+=2){
    if ( i%2!=0){
       enenArray.push(i); 
    }
   } 
};
createEvenArray(10);
createOddArray(10);
console.log(enenArray.sort(function(a,b)){
 return a-b });