// Global Variables

let currentTime = moment().hours();
var timeBlocks = $("#timeBlocks");
var noteArray = [];

// Hourly timeblocks are presented for a 24-hour day.
// For time, starting at midnight:
//     Create a div,
//     Give the div a id or class,
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

function colorTimeBlock() {
  for (i = 0; i < 24; i++) {
    let blockTime = $("#hour-" + i);
    let dataHour = blockTime.attr("data-hour");
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

function updateTimeBlocks() {
  $("#currentDay").text(moment().format("llll"));
  colorTimeBlock();
  setInterval(updateTimeBlocks, 5000);
}

function saveNote() {
  let hourSelected = $(this).attr("data-click");
  let note = $("#timeText-" + hourSelected).val();

  console.log(hourSelected);
  console.log(note);

  let noteObj = {
    note: note,
    hour: hourSelected,
  };

  noteArray.push(noteObj);
  localStorage.setItem("noteArray", JSON.stringify(noteArray));
}

function loadNote() {
  if (localStorage.getItem("noteArray") !== null) {
    var myNotes = JSON.parse(localStorage.getItem("noteArray"));
    for (i = 0; i < myNotes.length; i++) {
      $("#timeText-" + myNotes[i].hour).val(myNotes[i].note);
    }
  }
}

$(document).on("click", ".saveBtn", saveNote);

diplayTimeBlocks();
colorTimeBlock();
updateTimeBlocks();
loadNote();
