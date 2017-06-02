// Business (or back-end) logic:
var courses = ["design","cSharp","java", "php", "ruby"];

var courseScore = function(courseName) {
  //math formula goes here
  var score = 0;

  var frontBackRange = parseInt($("#frontBack").val()) - 2;
  var personalRange = parseInt($("#personal").val()) - 2;
  var nerdLevelRange = parseInt($("#nerdLevel").val()) - 2;
  var moneyRange = parseInt($("#money").val()) - 2;
  var alignmentRange = parseInt($("#alignment").val()) - 2;

  //course logic here
  switch(courseName) {
      case "design":
        score = score - frontBackRange - personalRange - nerdLevelRange - moneyRange - alignmentRange;
        break;
      case "cSharp":
        score = score + frontBackRange + personalRange + nerdLevelRange - moneyRange + alignmentRange;
        break;
      case "java":
        score = score + frontBackRange + personalRange + nerdLevelRange - moneyRange + alignmentRange;
        break;
      case "php":
        score = score + frontBackRange + personalRange + nerdLevelRange - alignmentRange;
        break;
      case "ruby":
        score = score - frontBackRange - personalRange + nerdLevelRange - moneyRange - alignmentRange;
        break;

      default:
        score = 0;
  }
  return score;
};



// Everything below this line is user interface (or front-end) logic:

var setRecommended = function(){
  //CSS code goes here
  courses.forEach(function(entry){
    //calculate the course score
    // if score is above zero highlight course box else fade it

    if (courseScore(entry) > 1){
      $("#"+entry).addClass("recommended");
    } else {
      $("#"+entry).removeClass("recommended");
    }

  });
}


$(document).ready(function() {


  $('input[type=range]').on('input', function () {
      //$(this).trigger('change');
        setRecommended();
  });


});
