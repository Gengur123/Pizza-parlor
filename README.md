# _Arthur Lee's Fake Pizza place Website_

#### _A simple pizza website_

#### By _**Arthur Lee**_


## Technologies Used

* _HTML_
* _CSS_
* _Javascript_

## Description

_This apllication allows users to customize there pizza with a array of different options._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Mavigate to the top level of the directory._
* _Open **index.html** to your browser_


## Known Bugs

* _No known bugs_

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)
 
 Copyright (c) 2020 Arthur Lee

## Contact Information

_Arthur Lee [meleearthur@gmail.com](meleearthur@gmail.com)_


Describe: Pizza()
Test: It should return an empty object that contains a blank size, crust topping and a 0 price. 
Expected: Pizza {size: "", crust: "", toppings: [], price: 0}

Describe: Pizza.prototype.prizeSize()
Test: It should return the price of 5 when passing in a small pizza.
Expected: pizza.size = small =>>> pizza.price = 5$

Describe: Pizza.prototype.prizeSize()
Test: It should return the price of 7 when passing in a medium pizza.
Expected: pizza.size = medium =>>>  pizza.price = 7$

Describe: Pizza.prototype.prizeSize()
Test: It should return the price of 10 when passing in a large pizza.
Expected: pizza.size = large =>>> pizza.price = 10$

Describe: Pizza.prototype.priceTopping()
Test: It should loop the amount of times based on the length of the toppings array
Expected: toppings = [1,2] ===>>> loops 2 times

Describe: Pizza.prototype.priceTopping()
Test: It should add the values of the toppings to the this.price variable
Expected: toppings = [1,2] ===>>> this.price = +3
