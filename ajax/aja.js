var getData = function () {
    console.log("getData is working");
    $.ajax({
        url: "http://api.vschool.io/rimaalnakkash/todo/",
        type: "GET",
        success: function (result) {
            for (var i = 0; i < result.length; i++) {
                var outputData = "<li>" + result[i].title + "<\li> <li>" + result[i].description + "<\li><li>" + result[i].Price + "<\li><li>" + result[i].completed + "<\li>";
                $("#output").append(outputData);
            }
        }
    });
};
$("#get").click(function () {
    $.ajax({
       url: "http://api.vschool.io/rimaalnakkash/todo/58864265f945ec460e3c5a13",
      type: 'DELETE',
       success: function () {
           getData();
       }
   });
});

$("#update").click(function () {
    var title = $("#title").val();
   var description = $("#description").val();
    var Price = $("#Price").val();
   var url = $("#url").val();
    var setdata = {
        title: title,
       description: description,
       Price: Price,
       url: url
    };

    var insertdata =
       $.ajax({
           type: "PUT",
           url: "http://api.vschool.io/rimaalnakkash/todo/58864265f945ec460e3c5a13",
           data: setdata,
            success: function () {
               getData();
          }
       });
});