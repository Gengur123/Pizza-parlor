//Business Logic
  function Pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.price = 0;
  }

  Pizza.prototype.priceSize = function() {
    if (this.size === 'small') {
      this.price += 5;
    } else if (this.size === 'medium') {
      this.price += 7;
    } else {
      this.price += 10;
    }
  }
  Pizza.prototype.priceTopping = function() {
    for(let i = 0; i < this.toppings.length; i++){
      this.price += parseInt(this.toppings[i].value)
    }
  }
  
//UI Logic
$(document).ready(function () {
  let size;
  let crust;
  let toppings;

  $("form#Q1").submit(function () {
    event.preventDefault();
    size = $("input:radio[name=size]:checked").val();
    $("#Q1").hide();
    $("#Q2").show();
  });

  $("form#Q2").submit(function () {
    event.preventDefault();
    crust = $("input:radio[name=crust]:checked").val();
    $("#Q2").hide();
    $("#Q3").show();
  });

  $("form#Q3").submit(function () {
    event.preventDefault();
    toppings = $("input[type='checkbox']:checked");
    let pizza = new Pizza(size,crust,toppings)
    pizza.priceSize()
    pizza.priceTopping()
    $("#Q3").show();
    $("#total").append(pizza.price);
    $("#btn1").hide();
  });

});


