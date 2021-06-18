$(document).ready(function () {
  function pizza() {
    this.size = "d";
    this.crust = "d";
    this.topping = "d";
  }
  var pizza = new pizza()
  $("form#Q1").submit(function () {
    event.preventDefault();
    const size = $("input:radio[name=size]:checked").val();
    console.log(size)
    $("#Q1").hide();
    $("#Q2").show();
    $("#smallpizza").hide();
    $("#mediumpizza").hide();
    $("#largepizza").hide();
  });

  $("form#Q2").submit(function () {
    event.preventDefault();
    const crust = $("input:radio[name=crust]:checked").val();
    console.log(size)
    $("#Q2").hide();
    $("#Q3").show();
    $("#panpizza").hide();
    $("#handpizza").hide();
    $("#thinpizza").hide();
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
