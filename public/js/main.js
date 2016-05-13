
// first get the things to show up in the stupid thing
// dropdowns 

function Day (num) {
	this.id = num;
	this.hotel = null; 
	this.activity = []; 
	this.restaurant = [];
}
//things in the array to show up in the select

//get it so when we click, we are added to the day
var currDay = 1;
var numOfDays = 1;
var firstDay = new Day(1)


var itinerary = [firstDay];

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
//addToDay (string, string) => adds items to a prop on the currDay object
//addToDay (string, string) => updates dom
function addToDay(item, table){
	if (table === "hotel") {
		itinerary[currDay-1][table] = item;
	}
	else {
		itinerary[currDay-1][table].push(item);
	}
	console.log("after w add an item: ", table,  itinerary);
	var dayEl = $("#"+table+"-list"); 
	dayEl.append("<li id=" + item + ">" + item + "<span data-value = " + item + " class='glyphicon glyphicon-remove-circle' aria-hidden='true'></span></li>");
}

function removeFromDay(span){
	//TO IMPLEMENT: fix remove

	// console.log("remove", itinerary[currDay-1], table)
	

}

//selects item like hotel 
$("select").change(function(e){
	var item = this.value;
	var table = $(this).attr("data-type");
	//console.log(item, table, currDay);
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

//TO IMPLEMENT: make this fadeout
//click x remove item from day obj 
$(".selections").on("click", ".glyphicon-remove-circle", function(e){
	var removeBtnParent = $(e.target).attr("data-value");
	var item = $("#"+removeBtnParent); //[li]
	var table = item.parent(),//[li].part
		table = $(table).attr("id").slice(0,-5);
	var itemText = item.html().split("<")[0];


	console.log("li?", itemText, table);
	$("#"+removeBtnParent).remove()

	removeFromDay(item);
});


//add a day
$(".addDay").on("click", function(){
	numOfDays++;
	currDay = numOfDays;

	var newDay = new Day(currDay); 
	itinerary.push(newDay);

	console.log(itinerary)
	$(".badge-day-display").append("<p class='badge day' id = " + numOfDays +">" + numOfDays+ "</p>")
	$(".numDay").html("Day "+currDay) 
	console.log($("#"+numOfDays));
});



addHotels();
addRestaurant();
addActivities();
