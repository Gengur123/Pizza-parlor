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

  $('input[name="crust"]').click(function () {
    let crust = $('input[name="crust"]:checked').val()
    if (crust === "original") {
      $("#panpizza").show();
      $("#handpizza").hide();
      $("#thinpizza").hide();

    } else if (crust === "tossed") {
      $("#handpizza").show();
      $("#panpizza").hide();
      $("#thinpizza").hide();
      
    } else {
      $("#thinpizza").show();
      $("#handpizza").hide();
      $("#panpizza").hide();
    }
  });

  $('input[name="topping"]').click(function () {
    let topping = $('input[name="topping"]:checked').val()
    if (topping === "pepperoni") {
      $("#pepperonipizza").show();
      $("#meatpizza").hide();
      $("#supremepizza").hide();

    } else if (topping === "meat") {
      $("#meatpizza").show();
      $("#pepperonipizza").hide();
      $("#supremepizza").hide();
      
    } else {
      $("#supremepizza").show();
      $("#pepperonipizza").hide();
      $("#meatpizza").hide();
    }
  });
});
