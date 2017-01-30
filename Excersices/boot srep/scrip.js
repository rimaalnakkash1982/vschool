$(".btn").click(function(){
    var timeInterval = setInterval(function() {
        var sec=parseInt($("#sec").val());
        var min=parseInt($("#min").val());
        var hours=parseInt($("#hours").val());
        sec--;
        if (sec<=0 && min >0){
            min--;
            sec=59;
            }
        if (min<=0 && hours >0){
            hours--;
            min=59;
            }
        if (sec<=0 && min <=0 && hours<=0){
            $("#bom").html("boooom");
             clearInterval(timeInterval);
            }  
        
        $("#sec").val(sec);
      $("#min").val(min);
      $("#hours").val(hours);
        
    },1000);
    
    });