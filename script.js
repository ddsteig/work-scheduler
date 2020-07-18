// Global Variables

let currentTime = moment().hours();
var timeBlocks = $("#timeBlocks");

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

    let timeColTxt = $("<textarea>");
    timeColTxt.attr("class", "col-8");
    timeColTxt.attr("id", "timeText-" + i);

    let timeColBtn = $("<button>");
    timeColBtn.attr((type = "submit"));
    timeColBtn.attr("class", "col-2 fa fa-lock saveBtn");

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
      colorBlock.attr("class", "col-8 past description");
    } else if (currentTime == dataHour) {
      colorBlock.attr("class", "col-8 present description");
    } else {
      colorBlock.attr("class", "col-8 future description");
    }
    console.log(dataHour);
  }
}

function updateTimeBlocks() {
  $("#currentDay").text(moment().format("llll"));
  colorTimeBlock();
  setInterval(updateTimeBlocks, 5000);
}

// $(".saveBtn").click(function () {



// });

diplayTimeBlocks();
colorTimeBlock();
updateTimeBlocks();
