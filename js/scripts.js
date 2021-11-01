function Place(location, landmarks, timeOfYear) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
}

function travelLog() {
  let place1 = new Place("Paris", "Eiffel Tower", "Spring");
  let place2 = new Place("London", "Big Ben", "Fall");
  let place3 = new Place("New York", "Empire State Building", "Summer");
}


$(document).ready(function() {
  $(".clickable").click(function() {
    $("#details-showing").toggle();
    $("#details-hidden").toggle();
  });
});