document.getElementById("resultBtn").addEventListener("click",sum);
function sum(){
    var number1=
        document.getElementById("num1").value;               
    var number2= 
    document.getElementById("num2").value;
    var number3= 
    document.getElementById("num3").value;
    
    document.getElementById("result").value=
        Number(number1)+ Number(number2)+Number(number3);
    
}