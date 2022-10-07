
var addtodo = $("#addtodo").val();




function todoekle() {
    var todogiris = $("#addtodo").val();
    var li = $("<li class='list-group-item list-group-item-secondary'></li>");
    li.text(todogiris);
    $(li).append("<button class='btn-close'></button>")
    console.log(todogiris);
    $("#list").append(li);
}
