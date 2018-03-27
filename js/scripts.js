$().ready(function() {
  $("form#factorial").submit(function(event) {
    event.preventDefault();

    var total = 1;
    var userInput = parseInt($("#number").val());
    if (userInput === 0) {
      total = 1;
    } else if (userInput < 0) {
      // $("#output").append("Please enter a number larger than zero.");
      total = "Please enter a number zero or larger."
    }
    for(var index = userInput; index > 0; index -= 1) {
      total *= index;
    }

    $("#output").append("<br><p class='lead'>Your factorial output is: " + "</p>" + "<h1>" + total + "</h1>");
    $("#factorial").hide();

    $("#clear").click(function() {
      location.reload();
    });
  });
});
