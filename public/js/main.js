
// first get the things to show up in the stupid thing
// dropdowns 


//things in the array to show up in the select

//get it so when we click, we are added to the day
var currDay = 1;
var numOfDays = 1;

function addHotels(){
	hotels.forEach(function(hotel){
		$(".h").prepend("<option  name=hotel.name>"+hotel.name+"</option>")
	})

}



$(".addDay").on("click", function(){
	
	numOfDays++;


	$(".badge-day-display").append("<p class='badge day' id = " + numOfDays +">" + numOfDays+ "</p>")
	console.log($("#"+numOfDays));
});

function addRestaurant(){
	restaurants.forEach(function(restaurant){
		$(".r").prepend("<option name=restaurant.name>"+restaurant.name+"</option>")
	})

}
function addActivities(){
	activities.forEach(function(activity){
		$(".a").prepend("<option name=activity.name>"+activity.name+"</option>")
	})

}

$("select").change(function(e){
	var item = this.value;
	var table = $(this).attr("data-type");

});
$(".day").on("click", function(e){
	console.log(this);
	currentDay = e.target.id;
	console.log(e.target.id)	
})




addHotels();
addRestaurant();
addActivities();
