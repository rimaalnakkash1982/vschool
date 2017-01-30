var trashTalsk = ["onfo5 belaban", "ou3a yef2a3", "bass ba2a" , "ah ya ma5ratje"];
$("#done").click(function () {
        if ($("#Name").val() == "") {
            alert("Type in MAN!");
        }
        else {
            if ($("#trashTalk:checked").length > 0) {
                $("#table").append("<tr> <td>" + $("#Name").val() + "</td><td>" + $("#Game").val() + "</td><td> " + $("#Score").val() + "</td><td>" + $("#Date").val() + "</td><td>" + trashTalsk[getRandomInt(0,3)] + "</td> </tr>");
            }
            else {
                $("#table").append("<tr> <td>" + $("#Name").val() + "</td><td>" + $("#Game").val() + "</td><td> " + $("#Score").val() + "</td><td>" + $("#Date").val() + "</td><td></td> </tr>");
            }
        }
        });


sortTable($('#mytable'),'asc');   
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}