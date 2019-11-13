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


const now = moment().startOf('hour');
const currentHour = now.hour();
$("#CurrentDay").text(now.format("DD MMM YYYY"));








function supportsLocalStorage() {
  return ('localStorage' in window) && window['localStorage'] !== null;
}

function save() {
 if (!supportsLocalStorage()) { return false; }
	note = notepad.value;
		console.log(note);
		localStorage["stored.note"] =  note;
   return true;
}

function resume() {
   if (!supportsLocalStorage()) { return false; }
		note = localStorage["stored.note"];
		if (!note) { return false; }
		notepad.value = note;
		return true;
}
