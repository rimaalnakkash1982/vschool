$("#submit").click(function(){
    var item=$("#toDo").val();
  $("#output").append ( "<li id = '" + item + "'> <button onclick =deleteItem(" + item + ")>x</button>" + item + "</li>" );
    $("#toDo").val("");
});
function deleteItem(id){
    $(id).remove();
}