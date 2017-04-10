
//Strike through Todos by clicking them

// clicking the list item
$("ul").on("click", "li", function(){
	//if li is gray, turn black. else turn gray.
	$(this).toggleClass("completed");
})

//Click on X to delete To-Do

// Using "on" on the parent element that already exists
// Allows for new child elements to have event listeners when created.
$("ul").on("click","span", function(event){


	$(this).parent().fadeOut(500,function(){
		$(this).remove(); // Removes parent and this. This refers to li (From parent)
	})
		event.stopPropagation(); // Stops Event bubbling (aka li's event launching)
})



$("input[type='text']").keypress(function(event){

	if(event.which === 13){ // Enter key
		//grabs value from input
		var todoText = $(this).val();

		$(this).val("");
		//create a new li to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>");
	}
});

$(".hide").click(function(){
	$("input[type='text']").fadeToggle();
	$(this).toggleClass("fa-toggle-on");
	$(this).toggleClass("fa-toggle-off");
})