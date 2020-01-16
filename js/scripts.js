$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var beach = parseInt($("#beach").val());
    var lunch = parseInt($("#lunch").val());
    var workout = parseInt($("#workout").val());
    var total = beach + lunch + workout;

    if (total < 3) {
      alert("please complete the survey");
    } else if (total === 3) {
      $(".result").text("liberal");
    } else if (total > 3 && total < 6) {
      $(".result").text("moderate");
    } else if (total === 6) {
      $(".result").text("conservative");
    }

    $("#result").show();
  });
});
