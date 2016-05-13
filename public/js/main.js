
// first get the things to show up in the stupid thing
// dropdowns 


//things in the array to show up in the select

//get it so when we click, we are added to the day
var currDay = 1;
var numOfDays = 1;
var itinerary = {};

function addHotels(){
	hotels.forEach(function(hotel){
		$(".h").prepend("<option  name=hotel.name>"+hotel.name+"</option>")
	})

}

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

//addToDay (string, string) => updates dom
function addToDay(item, table){
	var dayEl = $("#"+table+"-list")
	dayEl.append("<li id=" + item + ">" + item + "<span data-value = " + item + " class='glyphicon glyphicon-remove-circle' aria-hidden='true'></span></li>");
}

function removeFromDay(item){
//TO IMPLEMENT: fix remove
	var removeBtnParent = $(item).attr("data-value");
	$("#"+removeBtnParent).remove()
//.remove();
//	var dayEl = $()
}

//selects item like hotel 
$("select").change(function(e){
	var item = this.value;
	var table = $(this).attr("data-type");
	console.log(item, table, currDay);
	addToDay(item, table);
});


 //  ____    _ __   ______  
 // |  _ \  / \\ \ / / ___| 
 // | | | |/ _ \\ V /\___ \ 
 // | |_| / ___ \| |  ___) |
 // |____/_/   \_\_| |____/ 
                         
//set current day
$(".badge-day-display").on("click", ".day", function(e){
	console.log(this);
	currDay = e.target.id;
	$(".numDay").html("Day "+currDay) 
	console.log("currDay", currDay)	
})
//add a day
$(".addDay").on("click", function(){
	numOfDays++;
	$(".badge-day-display").append("<p class='badge day' id = " + numOfDays +">" + numOfDays+ "</p>")
	console.log($("#"+numOfDays));
});
//grab the item associated w/the glyphicon
//TO IMPLEMENT: make this fadeout
$(".selections").on("click", ".glyphicon-remove-circle", function(e){
	removeFromDay(e.target);
})

addHotels();
addRestaurant();
addActivities();
