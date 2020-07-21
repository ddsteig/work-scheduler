// Global Variables

let currentTime = moment().hours();
var timeBlocks = $("#timeBlocks");
var noteArray = [];

// Hourly timeblocks are presented for a 24-hour day.
// For time, starting at midnight:
//     Create a div,
//     Give the div a id or class,
//        Within the div:
//          Create label element for time,
//          Create input element for text,
//          Create button element for save button.
//     Append div to html,
// Military time format.

function diplayTimeBlocks() {

  for (i = 0; i < 24; i++) {
    let timeRow = $("<div>");
    timeRow.attr("class", "row time-block");
    timeRow.attr("data-hour", i);
    timeRow.attr("id", "hour-" + i);

    let timeColHour = $("<label>");
    timeColHour.attr("class", "col-2 hour");
    $(timeColHour).text(i + ":00");

    let timeColTxt = $("<input>");
    timeColTxt.attr("class", "col-8 text");
    timeColTxt.attr("id", "timeText-" + i);
    timeColTxt.attr("type", "text");
    timeColTxt.attr("placeholder", "Type Memo Here");

    let timeColBtn = $("<button>");
    timeColBtn.attr((type = "click"));
    timeColBtn.attr("class", "col-2 fa fa-lock saveBtn");
    timeColBtn.attr("data-click", i);

    $(timeRow).append(timeColHour);
    $(timeRow).append(timeColTxt);
    $(timeRow).append(timeColBtn);
    $("#timeBlocks").append(timeRow);
  }
}

// Timeblocks are color coded by:
//    For loop that grabs the id# and data# to compare the value of the time block against current time.
//    Conditional statement updates classes of text area based on time.

function colorTimeBlock() {

  for (i = 0; i < 24; i++) {
    let dataHour = $("#hour-" + i).attr("data-hour");
    let colorBlock = $("#timeText-" + i);

    if (currentTime > dataHour) {
      colorBlock.attr("class", "col-8 text past description");
    } else if (currentTime == dataHour) {
      colorBlock.attr("class", "col-8 text present description");
    } else {
      colorBlock.attr("class", "col-8 text future description");
    }
  }
}

// Time and date posted at the top updates every 5 seconds.

function updateTime() {
  $("#currentDay").text(moment().format("llll"));
  setInterval(updateTimeBlocks, 5000);
}

// Updates the color blocks every 10 mins running the conditionals.

function updateTimeBlocks() {
  colorTimeBlock();
  setInterval(updateTimeBlocks, 10000);
}

// Grabs the data# of the clicked button and the text,
  // Creates an object with the data,
    // Sets object to local Storage.

function saveNote() {
  
  let hourSelected = $(this).attr("data-click");
  let note = $("#timeText-" + hourSelected).val();
  let noteObj = {
    note: note,
    hour: hourSelected,
  };

  noteArray.push(noteObj);
  localStorage.setItem("noteArray", JSON.stringify(noteArray));

}

// Checkes to see if there is local storage data on refresh,
  // Parses data and returns the text based on the value where it was grabbed.

function loadNote() {

  if (localStorage.getItem("noteArray") !== null) {
    var myNotes = JSON.parse(localStorage.getItem("noteArray"));
    for (i = 0; i < myNotes.length; i++) {
      $("#timeText-" + myNotes[i].hour).val(myNotes[i].note);
      let noteObj = {
        note: myNotes[i].note,
        hour: myNotes[i].hour
      }
      noteArray.push(noteObj)
    }
  }  
}

// Click event to run the fucntion to save the text to local Storage.

$(document).on("click", ".saveBtn", saveNote);

// Click event to clear local storage and refresh page.

$("#clearbutton").on("click", function(){
  localStorage.clear()
  document.location.reload()
})

diplayTimeBlocks();
colorTimeBlock();
updateTime();
updateTimeBlocks();
loadNote();