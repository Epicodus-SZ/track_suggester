// Business (or back-end) logic:
var courses = ["design","cSharp","java", "php", "ruby"];

var courseScore = function(courseName) {
  var score = 0;
  var frontBackRange = parseInt($("#frontBack").val()) - 2;
  var tabsRange = parseInt($("#tabs").val()) - 2;
  var nerdLevelRange = parseInt($("#nerdLevel").val()) - 2;
  var moneyRange = parseInt($("#money").val()) - 2;
  var alignmentRange = parseInt($("#alignment").val()) - 2;

  //course logic
  switch(courseName) {
      case "design":
        score = score - frontBackRange - tabsRange - nerdLevelRange - moneyRange - alignmentRange;
        break;
      case "cSharp":
        score = score + frontBackRange - tabsRange + nerdLevelRange - moneyRange + alignmentRange;
        break;
      case "java":
        score = score + frontBackRange + tabsRange + nerdLevelRange - moneyRange + alignmentRange;
        break;
      case "php":
        score = score + frontBackRange + tabsRange + nerdLevelRange - moneyRange + alignmentRange;
        break;
      case "ruby":
        score = score - frontBackRange + tabsRange - nerdLevelRange - moneyRange - alignmentRange;
        break;
      default:
        score = 0;
  }
  return score;
};

// Everything below this line is user interface (or front-end) logic:
var setRecommended = function(){
  //calculate the course score
  courses.forEach(function(entry){
    if (courseScore(entry) > 1){
      $("#"+entry).addClass("recommended");
    } else {
      $("#"+entry).removeClass("recommended");
    }
  });
}

$(document).ready(function() {
  $('input[type=range]').on('input', function () {
        setRecommended();
  });
});
