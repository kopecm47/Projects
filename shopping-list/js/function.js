$(document).ready(function () {

//add items using enter
	$(#item).keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault()
			$("#add").click();
		};
	});
//add items using + button
	$("#add").click(function(){
		var txtbox = document.getElementById("item");
		var txtvar = txtbox.value;
		event.preventDefault();

		if (!.trim($("item").val())) {
			alert("Please enter text");
		} else {
			$("<li class="items"></li>").appendTo("#list").html("<div class="box"></div><span>" + txt val + "</span>");
			document.getElementById("item").value = "";
		};
	});
//delete list items
//cross off list items and add check mark
//sortable list items

});