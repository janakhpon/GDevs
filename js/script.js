$(document).ready(function () {
    
$(".dropdown-button").dropdown({
  inDuration: 300,
  outDuration: 225,
  hover: true,
  belowOrigin: true,
  alignment: "right" 
});
$(".dropdown-button1").dropdown({
    hover: false, 
    belowOrigin: true, 
    alignment: "right" 
});
  $(".button-collapse").sideNav(); 
  $(".modal").modal();
  $(".collapsible").collapsible();
  $(".datepicker").pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: "Today",
    clear: "Clear",
    close: "Ok",
    closeOnSelect: false // Close upon selecting a date,
  });
        

    
});
