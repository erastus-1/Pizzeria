$(document).ready(function () {
  function Pizza(pizzaSize, pizzaType, pizzaToppings) {
    this.pizzaSize = pizzaSize;
    this.pizzaTopping = pizzaToppings;
    this.pizzaType = pizzaType;
    this.crustWeight = crustWeight;
  }
  Pizza.prototype.getPizzaPrice = function () {
    return (
      this.getPizzaCrustWeightprice() +
      this.getPizzaTypePrice() +
      this.getPizzaToppingsPrice()
    );
  };

  Pizza.prototype.getPizzaTypePrice = function () {
    if (this.pizzaSize === "regular") {
      if (this.pizzaType === Bbq) {
        return 350;
      } else if (this.pizzaType === chicken) {
        return 500;
      } else if (this.pizzaType === veggie) {
        return 300;
      } else if (this.pizzaType === hawaiian) {
        return 500;
      }
    } else if (this.pizzaSize === "medium") {
      if (this.pizzaType === Bbq) {
        return 500;
      } else if (this.pizzaType === Chicken) {
        return 650;
      } else if (this.pizzaType === Veggie) {
        return 550;
      } else if (this.pizzaType === Hawaiian) {
        return 650;
      }
    } else if (this.pizzaSize === "large") {
      if (this.pizzaType === Bbq) {
        return 700;
      } else if (this.pizzaType === Chicken) {
        return 850;
      } else if (this.pizzaType === Veggie) {
        return 700;
      } else if (this.pizzaType === Hawaiian) {
        return 850;
      }
    } else if (this.pizzaSize === "Extra-Large") {
      if (this.pizzaType === Bbq) {
        return 1000;
      } else if (this.pizzaType === Chicken) {
        return 1050;
      } else if (this.pizzaType === Veggie) {
        return 950;
      } else if (this.pizzaType === Hawaiian) {
        return 1050;
      }
    }
  };
  Pizza.prototype.getPizzaToppingsPrice = function () {
    if (this.pizzaSize === "regular") {
      if (this.pizzaToppings === Bacon) {
        return 35;
      } else if (this.pizzaToppings === chicken) {
        return 50;
      } else if (this.pizzaToppings === Extra - cheese) {
        return 30;
      } else if (this.pizzaToppings === Meat) {
        return 50;
      }
    } else if (this.pizzaSize === "medium") {
      if (tthis.pizzaToppings === Bacon) {
        return 50;
      } else if (this.pizzaToppings === Chicken) {
        return 65;
      } else if (this.pizzaToppings === Extra - cheese) {
        return 55;
      } else if (this.pizzaToppings === Meat) {
        return 65;
      }
    } else if (this.pizzaSize === "large") {
      if (this.pizzaToppings === Bacon) {
        return 100;
      } else if (this.pizzaToppings === Chicken) {
        return 80;
      } else if (this.pizzaToppings === Extra - cheese) {
        return 70;
      } else if (this.pizzaToppings === Meat) {
        return 80;
      }
    } else if (this.pizzaSize === "Extra-Large") {
      if (this.pizzaToppings === Bacon) {
        return 100;
      } else if (this.pizzaToppings === Chicken) {
        return 105;
      } else if (this.pizzaToppings === Extra - cheese) {
        return 50;
      } else if (this.pizzaToppings === Meat) {
        return 100;
      }
    }
  };
  Pizza.prototype.getPizzaCrustWeightprice = function () {
    if (this.pizzaSize === "regular") {
      if (this.pizzaSize === "Extra.Large") {
        if (this.crustWeight === Thin) {
          return 50;
        } else if (this.crustWeight === Thick) {
          return 100;
        } else if (this.crustWeight === Double) {
          return 150;
        } else if (this.crustWeight === Crispy) {
          return 100;
        }
      }
    } else if (this.pizzaSize === "medium") {
      if (this.pizzaSize === "Extra.Large") {
        if (this.crustWeight === Thin) {
          return 50;
        } else if (this.crustWeight === Thick) {
          return 100;
        } else if (this.crustWeight === Double) {
          return 150;
        } else if (this.crustWeight === Crispy) {
          return 100;
        }
      }
    } else if (this.pizzaSize === "large") {
      if (this.pizzaSize === "Extra.Large") {
        if (this.crustWeight === Thin) {
          return 50;
        } else if (this.crustWeight === Thick) {
          return 100;
        } else if (this.crustWeight === Double) {
          return 150;
        } else if (this.crustWeight === Crispy) {
          return 100;
        }
      }
    } else if (this.pizzaSize === "Extra.Large") {
      if (this.crustWeight === Thin) {
        return 50;
      } else if (this.crustWeight === Thick) {
        return 100;
      } else if (this.crustWeight === Double) {
        return 150;
      } else if (this.crustWeight === Crispy) {
        return 100;
      }
    }
  };

  // user information and output
  var customerName = "";
  var totalCost = 0;
  var pizzasOrdered = [];
  var County = "";
  var street = "";
  var contactNumber = "";

  $("#order-form").submit(function (event) {
    event.preventDefault();
    console.log("click", $("#pizzaType").val())
    var pizzaTypeSelected = $("#pizzaType").val();
    var pizzaSizeSelected = $("#pizzaSize").val();
    var pizzaToppingSelected = $("#pizzaToppings").val();
    var crustWeightSelected = $("#crustWeight").val();

    var newPizza = new Pizza(
      pizzaTypeSelected,
      pizzaSizeSelected,
      pizzaToppingSelected,
      crustWeightSelected
    );
    pizzasOrdered.push(newPizza);
    $("#pizzaType").val("");
    $("#pizzaSize").val("");
    $("#pizzaToppings").val("");
    $("#crustWeight").val("");

    totalCost = 0;


    for (let i = 0; i < pizzasOrdered.length; i++) {
      totalCost += pizzasOrdered[i].getPizzaPrice();
    }
    console.log(newPizza)
    console.log(newPizza.pizzaType)
    console.log(newPizza.getPizzaTypePrice())

    $("#bill-summary").append(
      "<tr>" +
      '<th scope="row">' +
      newPizza.pizzaType +
      " -" +
      newPizza.getpizzaTypePrice() +
      "</th>" +
      "<td>" +
      newPizza.pizzaToppings +
      " - " +
      newPizza.getpizzaToppingPrice() +
      "</td>" +
      "<td>" +
      newPizza.crustWeight +
      " - " +
      newPizza.getCrustWeightPrice() +
      "</td>" +
      "<td>" +
      newPizza.pizzaSize +
      "</td>" +
      "<td>" +
      newPizza.getPizzaPrice() +
      "</td>" +
      "</tr>"
    );
    if (pizzasOrdered.length > 0) {
      $(".form-control").empty();
      $(".form-control").append("Add Another Order");
    }

    $("#total-amount").fadeIn();
    $("#checkout").fadeIn();
    $("#orders").fadeIn();

    $("#total-amount").empty();
    $("#total-amount").append(totalCost);
    $(".total-amount").show();
  });

  $("#checkout").click(function () {
    $(".checkout-options").show();
  });

  $("#checkout-form").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var deliveryOption = $("#delivery-option").val();
    customerName = name;
    console.log(name);
    console.log(deliveryOption);

    $("#checkout-form").submit(function (event) {
      event.preventDefault();
      var name = $("#name").val();
      var deliveryOption = $("#delivery-option").val();
      customerName = name;
      console.log(name);
      console.log(deliveryOption);
      $("#name").val("");
      $("#delivery-option").val("");
      $("#checkout-options").hide();
      if (deliveryOption === "deliver") {
        $("#street").show();
        $(".delivery-cost").show();
        $("#delivery-amount").append(200);
        totalCost += 200;
        $("#total-amount").empty();
        $("#total-amount").append(totalCost);
      } else {
        alert(customerName + ": Your total bill is Ksh. " + totalCost + ". Your order will be ready for collection in the next 30mins");
      }
      $("#delivery-form1").submit(function (event) {
        event.preventDefault();
        var estateEntered = $("#street").val();
        var county = $("#county").val();
        var contactNumberEntered = $("#number").val();
        estate = estateEntered;
        contactNumber = contactNumberEntered;
        $("#street").hide();
        alert(customerName + ": Your total bill is Ksh. " + totalCost + ". Your order will be delivered to " + county + ", " + contactNumber + " in the next 30mins");
      });
    });
  });
});