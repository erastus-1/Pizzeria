$(document).ready(function () {
  function Pizza(pizzaSize, pizzaType, pizzaToppings, crustWeight) {
    this.pizzaSize = pizzaSize;
    this.pizzaToppings = pizzaToppings;
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
    console.log(
      this.pizzaSize === "Regular",
      this.pizzaType === "Bbq",
      "drama"
    );
    if (this.pizzaSize === "Regular") {
      if (this.pizzaType === "Bbq") {
        return 350;
      } else if (this.pizzaType === "Chicken") {
        return 500;
      } else if (this.pizzaType === "Veggie") {
        return 300;
      } else if (this.pizzaType === "Hawaiian") {
        return 500;
      } else {
        return 100;
      }
    } else if (this.pizzaSize === "Small") {
      if (this.pizzaType === "Bbq") {
        return 700;
      } else if (this.pizzaType === "Chicken") {
        return 850;
      } else if (this.pizzaType === "Veggie") {
        return 650;
      } else if (this.pizzaType === "Hawaiian") {
        return 560;
      } else {
        return 160;
      }
    } else if (this.pizzaSize === "Medium") {
      if (this.pizzaType === "Bbq") {
        return 500;
      } else if (this.pizzaType === "Chicken") {
        return 650;
      } else if (this.pizzaType === "Veggie") {
        return 550;
      } else if (this.pizzaType === "Hawaiian") {
        return 650;
      } else {
        return 100;
      }
    } else if (this.pizzaSize === "Large") {
      if (this.pizzaType === "Bbq") {
        return 700;
      } else if (this.pizzaType === "Chicken") {
        return 850;
      } else if (this.pizzaType === "Veggie") {
        return 700;
      } else if (this.pizzaType === "Hawaiian") {
        return 850;
      } else {
        return 100;
      }
    } else if (this.pizzaSize === "Extra-Large") {
      if (this.pizzaType === "Bbq") {
        return 1000;
      } else if (this.pizzaType === "Chicken") {
        return 1050;
      } else if (this.pizzaType === "Veggie") {
        return 950;
      } else if (this.pizzaType === "Hawaiian") {
        return 1050;
      } else {
        return 100;
      }
    }
    console.log(this.pizzaSize, this.pizzaType, "check");
  };

  Pizza.prototype.getPizzaToppingsPrice = function () {
    if (this.pizzaSize === "Regular") {
      if (this.pizzaToppings === "Bacon") {
        return 35;
      } else if (this.pizzaToppings === "chicken") {
        return 50;
      } else if (this.pizzaToppings === "Cheese") {
        return 30;
      } else if (this.pizzaToppings === "Meat") {
        return 50;
      }
    } else if (this.pizzaSize === "Small") {
      if (this.pizzaToppings === "Bacon") {
        return 500;
      } else if (this.pizzaToppings === "Chicken") {
        return 650;
      } else if (this.pizzaToppings === "Cheese") {
        return 550;
      } else if (this.pizzaToppings === "Meat") {
        return 650;
      } else {
        return 100;
      }
    } else if (this.pizzaSize === "Medium") {
      if (tthis.pizzaToppings === "Bacon") {
        return 50;
      } else if (this.pizzaToppings === "Chicken") {
        return 65;
      } else if (this.pizzaToppings === "Cheese") {
        return 55;
      } else if (this.pizzaToppings === "Meat") {
        return 65;
      }
    } else if (this.pizzaSize === "Large") {
      if (this.pizzaToppings === "Bacon") {
        return 100;
      } else if (this.pizzaToppings === "Chicken") {
        return 80;
      } else if (this.pizzaToppings === "Cheese") {
        return 70;
      } else if (this.pizzaToppings === "Meat") {
        return 80;
      }
    } else if (this.pizzaSize === "Extra-Large") {
      if (this.pizzaToppings === "Bacon") {
        return 100;
      } else if (this.pizzaToppings === "Chicken") {
        return 105;
      } else if (this.pizzaToppings === "Cheese") {
        return 50;
      } else if (this.pizzaToppings === "Meat") {
        return 100;
      }
    }
  };
  Pizza.prototype.getPizzaCrustWeightprice = function () {
    if (this.pizzaSize === "Regular") {
      if (this.crustWeight === "Thin") {
        return 50;
      } else if (this.crustWeight === "Thick") {
        return 100;
      } else if (this.crustWeight === "Double") {
        return 150;
      } else if (this.crustWeight === "Crispy") {
        return 100;
      }
    } else if (this.pizzaSize === "Small") {
      if (this.crustWeight === "Thin") {
        return 500;
      } else if (this.crustWeight === "Thick") {
        return 650;
      } else if (this.crustWeight === "Double") {
        return 550;
      } else if (this.crustWeight === "Crispy") {
        return 650;
      } else {
        return 100;
      }
    } else if (this.pizzaSize === "Medium") {
      if (this.crustWeight === "Thin") {
        return 50;
      } else if (this.crustWeight === "Thick") {
        return 100;
      } else if (this.crustWeight === "Double") {
        return 150;
      } else if (this.crustWeight === "Crispy") {
        return 100;
      }
    } else if (this.pizzaSize === "Large") {
      if (this.crustWeight === "Thin") {
        return 50;
      } else if (this.crustWeight === "Thick") {
        return 100;
      } else if (this.crustWeight === "Double") {
        return 150;
      } else if (this.crustWeight === "Crispy") {
        return 100;
      }
    } else if (this.pizzaSize === "Extra-Large") {
      if (this.crustWeight === "Thin") {
        return 50;
      } else if (this.crustWeight === "Thick") {
        return 100;
      } else if (this.crustWeight === "Double") {
        return 150;
      } else if (this.crustWeight === "Crispy") {
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

  $("#myForm").submit(function (event) {
    event.preventDefault();
    console.log(
      "click",
      $("#pizzaType").val(),
      $("#pizzaSize").val(),
      $("#pizzaToppings").val(),
      $("#crustWeight").val()
    );
    var pizzaTypeSelected = $("#pizzaType").val();
    var pizzaSizeSelected = $("#pizzaSize").val();
    var pizzaToppingsSelected = $("#pizzaToppings").val();
    var crustWeightSelected = $("#crustWeight").val();

    var newPizza = new Pizza(
      pizzaSizeSelected,
      pizzaTypeSelected,
      pizzaToppingsSelected,
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
    console.log(newPizza);
    console.log(newPizza.pizzaPrice);
    console.log(newPizza.getPizzaTypePrice(), "crims");

    $("#bill-summary").append(
      "<tr>" +
      '<th scope="row">' +
      newPizza.pizzaType +
      " -" +
      newPizza.getPizzaTypePrice() +
      "</th>" +
      "<td>" +
      newPizza.pizzaToppings +
      " - " +
      newPizza.getPizzaToppingsPrice() +
      "</td>" +
      "<td>" +
      newPizza.crustWeight +
      " - " +
      newPizza.getPizzaCrustWeightprice() +
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
      $("#form-control").append();
      $("#form-control").append("Add Another Order");
    }

    // $("#total-amount").fadeIn();
    // $("#checkout").fadeIn();
    // $("#orders").fadeIn();

    $("#total-amount").empty();
    $("#total-amount").append(totalCost);
    $(".total-amount").show();
  });

  $("#checkout-form").click(function () {
    $(".checkout-options").show();
  });

  $("#delivery-form").submit(function (event) {
    event.preventDefault();
    var streetEntered = $("#street").val();
    var countyEntered = $("#county").val();
    var contactNumberEntered = $("#number").val();
    street = streetEntered;
    county = countyEntered;
    contactNumber = contactNumberEntered;
  
    alert(
      customerName +
      ": Your total bill is Ksh. " +
      totalCost +
      ". Your order will be delivered to " +
      street +
      ", " +
      contactNumber +
      " in the next 30mins"
    );
  });
  $(document).ready(function () {
    $(".img1").mouseover(function () {
       $(".item1").show();
    });
    $(".img1").mouseout(function () {
       $(".item1").hide();
    });
    $(".img2").mouseover(function () {
       $(".item2").show();
    });
    $(".img2").mouseout(function () {
       $(".item2").hide();
    });
    $(".img3").mouseover(function () {
       $(".item3").show();
    });
    $(".img3").mouseout(function () {
       $(".item3").hide();
    });
    $(".img4").mouseover(function () {
       $(".item4").show();
    });
    $(".img4").mouseout(function () {
       $(".item4").hide();
    });


  // $("#checkout-form").submit(function (event) {
  //   event.preventDefault();
  //   var name = $("#name").val();
  //   var deliveryOption = $("#delivery-option").val();
  //   customerName = name;
  //   console.log(name);
  //   console.log(deliveryOption);

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
      alert(
        customerName +
        ": Your total bill is Ksh. " +
        totalCost +
        ". Your order will be ready for your collection in the next 30mins"
      );
    }
  });
});
});

