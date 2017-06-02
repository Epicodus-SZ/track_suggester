// Business (or back-end) logic:
var courseScore = function() {
//math formula goes here
};

// Everything below this line is user interface (or front-end) logic:
var setRecommended = function(){
  //CSS code goes here
  console.log("front:" + $("#frontBack").val() + ", money:" + $("#money").val())

  if ($("#frontBack").val() === "0") {
    $("#designCourse").addClass("recommended");
  }
}


$(document).ready(function() {

  var frontBackRange;
  var moneyRange;

  $('input[type=range]').on('input', function () {
      //$(this).trigger('change');
        Suggester();
  });


});
