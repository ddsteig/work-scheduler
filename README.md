# Word Day Scheduler

 ### [Head to the Scheduler here!](https://ddsteig.github.io/work-scheduler/)https://ddsteig.github.io/work-scheduler/

<strong>A mobile responsive application, that allows you to see the date and time.</strong>
<strong>It also allows you to enter a note and save it to a time, that will save and load via local storage.</strong>

 ![Work Day Scheduler](/images/scheduler.jpg)

<hr>

<strong>The timeblocks are created and updated via the javascript.</strong>
 
![Time Block Create Code](/images/timeblocks.jpg)
 
<hr>
 
<strong>The timeblocks are colored according to past, present, and future times that are compared against the current time.</strong>

![Colored Timeblocks](/images/timecolors.jpg)

<hr>

<strong>This is the function that updates the timeblocks with color based on current time vs the timeblock time.</strong>

![Color Timeblock Code](/images/colorblocks.jpg)

<hr>

## Info

The app utilizes several functions and forloops.

* displayTimeBlocks()

Uses a for loop to create the timeblocks. 
It also adds classes for css.
Id's, and data attributes are used to help target specific data for setting local storage.

* colorTimeBlocks()

Uses a for loop to cycle through the timeblocks, compairing the current time with data attributes to color the timeblocks by past, present, and future.

* updateTime() & upateTimeBlocks()

Use setInterval to help update the time & date, and the coloring of the timeblocks.

* saveNote() & loadNote()

Pushes an object into an array for storing in the local storage, and also returns it so that the save text remains through page refreshing.
Targets text by using the id and data values given to the elements.

* $(document).on("click", ".saveBtn", saveNote);

Used for the click event on the save button.
Utilizies the document ready function to ensure all functions are called before allowing the click.

* $("#clearbutton").on("click", function()

Created a button in the header that clears local storage and refreshes the page to remove all notes.

<hr>

## Resources

This app utilizes:
* Bootstrap
* Moment().js
* Jquery
* Fontawesome
* Google Apis
