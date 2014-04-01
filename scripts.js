/**
 * @author Sharanya Haridas
 */

/*this is an array of all of our images*/

var images = ["drain_0m.png", "drain_1km.png", "drain_2km.png", "drain_3km.png", "drain_5km.png", "drain_50m.png", "drain_100m.png", "drain_200m.png", "drain_500m.png", "drain_ed.png", "drain_nl.png"];

/*index of the current image in our array*/

var index = 0;

function setNav(){
	console.log("setNav");
	
	$(".button").on("click", function() {
		
		var isNext = $(this).hasClass("next");
		
		if  (isNext ==true && index != (images.length-1)) {
			
			index =index+1;
		}
		else if (isNext== false && index >0) {
		
			index=index-1;
			
		}
		
		
		
		if (index == 0) {
			
			console.log("testing");
			
			$(".button.prev").addClass("disabled");
		}
		else if (index == (images.length-1))
	{ $(".button.next").addClass("disabled");
	} else {
		$(".button").removeClass("disabled");
		}
		
		updateImage();
		
		/*
		LEFTOVERCODE for ref only :-)
		index = index+1;
		updateImage();
		
		$(".button.prev").on("click", function() {
		
		index = index-1;
		updateImage();
		
		console.log("click!");
		
		*/
		
		
	
	});
	
}

function updateImage() {
	
	console.log(images[index]);
	$(".image-holder").html(
		"<img src='images/" + images[index] + "'/>"
	);

}

/*load first image into image holder*/

$(document).ready(function() {
	console.log("hi");
	
	$(".image-holder").html("<img src='images/" + images[index] + "'/>"
	
	);
	
	
		$(".button.prev").addClass("disabled");
		
	setNav();
});

console.log(images);
