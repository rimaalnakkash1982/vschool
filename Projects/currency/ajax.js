//
//function loadData() {
//    $.ajax({
//        url:"http://api.fixer.io/latest?base=USD" ,
//        type: "GET",
//        success: function (data) {
//            
//               $("#word").html(data.opening_crawl)
//            
//        }
//
//   });
//}
$(document).ready(function () {
    getData();
});
//var getData = function () {
//    $.ajax({
//    url: "http://api.fixer.io/latest?base=USD",
//        type: "GET",
//        success: function (data) {
//         for (var i = 0; i < data.length; i++) {
//                var submitCur = data[i].rates ;
//                $("#submit").html(data.rates);
//            }
//        }
//    });
//}

function exchange(){
    var inp = parseFloat($("#Money").val());
    var c = parseFloat($("#output").val());
    $('#Currency').val(c*inp);
    
}
function getData() {
    $.ajax({
        url: "http://api.fixer.io/latest?base=USD",
        type: "GET",
        success: function (result) {
            for (var i in result.rates) {
              
                $("#output").append("<option value="+result.rates[i]+">"+i+"</option>")
            }
        }
    });
};