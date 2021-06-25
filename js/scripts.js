//Business Logic
  function Pizza() {
    this.size = "";
    this.crust = "";
    this.toppings = [];
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
  Pizza.prototype.priceTopping = function(toppings) {
    this.toppings = toppings
    for(let i = 0; i < this.toppings.length; i++){
      this.price += parseInt(toppings[i].value)
    }
  }
  
//UI Logic
$(document).ready(function () {
  var pizza = new Pizza()

  $("form#Q1").submit(function () {
    event.preventDefault();
    pizza.priceSize($("input:radio[name=size]:checked").val());
    pizza.size = size
    $("#Q1").hide();
    $("#Q2").show();
  });

  $("form#Q2").submit(function () {
    event.preventDefault();
    const crust = $("input:radio[name=crust]:checked").val();
    pizza.crust = crust
    $("#Q2").hide();
    $("#Q3").show();
  });

  $("form#Q3").submit(function () {
    event.preventDefault();
    pizza.toppings = $("input[type='checkbox']:checked");
    pizza.priceTopping($("input[type='checkbox']:checked"));
    $("#Q3").show();
    $("#total").append(pizza.price);
    $("#btn1").hide();
  });

});


