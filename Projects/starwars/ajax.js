
function loadData() {
    $.ajax({
        url:"http://swapi.co/api/films/1/" ,
        type: "GET",
        success: function (data) {
            
               $("#word").html(data.opening_crawl)
            
        }

   });
}
$(document).ready(function () {
    loadData();
});