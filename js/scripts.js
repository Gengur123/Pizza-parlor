$(document).ready(function () {
  function pizza() {
    this.size = "d";
    this.crust = "d";
    this.topping = "d";
  }

  $("form#Q1").submit(function () {
    alert("You clicked a radio")
  });

  $('input[name="size"]').click(function () {
    let size = $('input[name="size"]:checked').val()
    if (size === "small") {
      $("#smallpizza").show();
      $("#mediumpizza").hide();
      $("#largepizza").hide();

    } else if (size === "medium") {
      $("#mediumpizza").show();
      $("#smallpizza").hide();
      $("#largepizza").hide();
      
    } else {
      $("#largepizza").show();
      $("#smallpizza").hide();
      $("#mediumpizza").hide();
    }
  });
});
