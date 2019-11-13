//setup a table for the calender with 

       // -display business hours between 9am to 5pm

        //-each slot displays one hour with

                //-the Time

                //-field for user Input

                //-save button

                    //The save button will save the input to storage and will save it for that timeblock for that hour


//Applicatin should display current day

//Each hour should be displayed as past, present and future and change depending on the time of day

//use moment.js in browser


//var d = moment.tz("2019-04-15 12:00", "America/New_York");

//console.log( new Date(d) );
//console.log( new Date(moment()) );
const now = moment().startOf('hour');
const currentHour = now.hour();
$("#CurrentDay").text(now.format("DD MMM YYYY"));




$("#container").on("click", ".Submit", function() {
	const $parent = $(this).parent();

	const hour = $parent.data('hour');
	const userInput = $parent.find(".input").val();

	planner[hour] = userInput;
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(planner));
});




//var notepad = document.getElementById("notepad");
//var schedule = document.getElementById("schedule");
//console.log(schedule.innerHTML);
//var note;
//window.onkeyup = save;

//function supportsLocalStorage() {
  //  return ('localStorage' in window) && window['localStorage'] !== null;
//}

//function save() {
 //   if (!supportsLocalStorage()) { return false; }
//		note = notepad.value;
//		console.log(note);
//		localStorage["stored.note"] =  note;
 //   return true;
//}

//function resume() {
//    if (!supportsLocalStorage()) { return false; }
//		note = localStorage["stored.note"];
//		if (!note) { return false; }
//		notepad.value = note;
//		return true;
//}
