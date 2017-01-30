//$("resultBtn").addEventListener("click", sum);
$("#num1").on("input",function(){
    sum();
});
$("#num2").on("input",function(){
    sum();
});
$("#num3").on("input",function(){
    sum();
});
 var number1=0,number2=0,number3=0;
function sum(){
     number1=$("#num1").val();
    $("#output1").val(number1* 11);
     number2=  $("#num2").val();
    $("#output2").val(number2 * 7);
     number3= $("#num3").val();
    $("#output3").val(number3 * 5);
    
    $("#result").val(
 Number(number1*11)+ Number(number2*7)+Number(number3*5));
    
}
 