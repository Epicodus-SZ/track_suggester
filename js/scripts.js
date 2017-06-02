// Business (or back-end) logic:
var courses = ["design","cSharp","java", "php", "ruby"];

var courseScore = function() {
//math formula goes here
var frontBackRange = parseInt($("#frontBack").val());
var personalRange = parseInt($("#personal").val());
var nerdLevelRange = parseInt($("#nerdLevel").val());
var moneyRange = parseInt($("#money").val());
var alignmentRange = parseInt($("#alignment").val());


};



// Everything below this line is user interface (or front-end) logic:

var setRecommended = function(){
  //CSS code goes here
  courses.forEach(function(entry){
    //calculate the course score
    // if score is above zero highlight course box else fade it

    courseScore();
  });

  if ($("#frontBack").val() === "0") {
    $("#designCourse").addClass("recommended");
  }
}


$(document).ready(function() {


  $('input[type=range]').on('input', function () {
      //$(this).trigger('change');
        setRecommended();
  });


});
