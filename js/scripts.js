//Business Logic
  function Pizza() {
    this.size = "";
    this.crust = "";
    this.topping = [];
    this.price = 0;
  }

  Pizza.prototype.priceSize = function(size) {
    this.size = size;
    if (this.size === 'small') {
      this.price += 5;
    } else if (this.size === 'medium') {
      this.price += 7;
    } else {
      this.price += 10;
    }
  }
  Pizza.prototype.priceTopping = function(topping){
    
  }
  
//UI Logic
$(document).ready(function () {
  var pizza = new Pizza()
  console.log(pizza)

  $("form#Q1").submit(function () {
    event.preventDefault();
    pizza.priceSize($("input:radio[name=size]:checked").val());
    pizza.size = size
    $("#Q1").hide();
    $("#Q2").show();
    $("#smallpizza").hide();
    $("#mediumpizza").hide();
    $("#largepizza").hide();
  });

  $("form#Q2").submit(function () {
    event.preventDefault();
    const crust = $("input:radio[name=crust]:checked").val();
    pizza.crust = crust
    $("#Q2").hide();
    $("#Q3").show();
    $("#panpizza").hide();
    $("#handpizza").hide();
    $("#thinpizza").hide();
  });

  $("form#Q3").submit(function () {
    event.preventDefault();
    pizza.priceTopping($("input:radio[name=topping]:checked").val());
    pizza.topping = topping
    $("#Q3").show();
    $("#pepperonipizza").hide();
    $("#meatpizza").hide();
    $("#supremepizza").hide();
    $("#total").append(pizza.price);
    console.log(pizza)
    console.log (pizza.price)
    $("#btn1").hide();
  });

});


