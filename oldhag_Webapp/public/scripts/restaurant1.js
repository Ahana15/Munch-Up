//side bar menu
const sideNav = $(".sidenav");
M.Sidenav.init(sideNav, {});
// Slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000
});

$(".button").on("click", function() {
  let $button = $(this);
  let oldValue = $button
    .parent()
    .find("input")
    .val();

  if ($button.text() == "+") {
    let newVal = parseFloat(oldValue) + 1;
  } else {
    // Don't allow decrementing below zero
    if (oldValue > 0) {
      let newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }
  $button
    .parent()
    .find("input")
    .val(newVal);
});

/* Set values + misc */
// let promoCode;
// let promoPrice;
let fadeTime = 300;

/* Assign actions */
$(".quantity input").change(function() {
  updateQuantity(this);
});

$(document).ready(function() {
  updateSumItems();
});

/* Recalculate cart */
function recalculateCart(onlyTotal) {
  let subtotal = 0;
  // console.log('hello');
  /* Sum up row totals */
  $(".item-subtotal").each(function() {

    console.log(this);
    console.log($(this).text());

    subtotal += parseFloat(
      $(this)
        // .children(".subtotal")
        // .find('.subtotal')
        .text()
    );
    console.log(subtotal);
  });

  /* Calculate totals */
  let total = subtotal;

  /*If switch for update only total, update only total display*/
  if (onlyTotal) {
    /* Update total display */
    $(".total-value").fadeOut(fadeTime, function() {
      $("#basket-total").html(total.toFixed(2));
      $(".total-value").fadeIn(fadeTime);
    });
  } else {
    /* Update summary display. */
    $(".final-value").fadeOut(fadeTime, function() {
      $("#basket-subtotal").html(subtotal.toFixed(2));
      $("#basket-total").html(total.toFixed(2));
      if (total == 0) {
        $(".checkout-cta").fadeOut(fadeTime);
      } else {
        $(".checkout-cta").fadeIn(fadeTime);
      }
      $(".final-value").fadeIn(fadeTime);
    });
  }
}

/* Update quantity */
function updateQuantity(quantityInput) {
  // console.log('hello');
  /* Calculate line price */
  let productRow = $(quantityInput)
    .parent()
    .parent()
    .parent();
  // console.log(productRow);
  let price = parseFloat(
    productRow
      .children(".table-price")
      .children(".item-price")
      .text()
  );
  // console.log(price);
  let quantity = $(quantityInput).val();
  // console.log(quantity);
  let linePrice = price * quantity;
  // console.log(linePrice);

  /* Update line price display and recalc cart totals */
  productRow
    .children(".table-subtotal")
    .children(".item-subtotal")
    .each(function() {
      // console.log('hello');
      $(this).fadeOut(fadeTime, function() {
        $(this).text(linePrice.toFixed(2));
        recalculateCart();
        $(this).fadeIn(fadeTime);
      });
    });

  // productRow.find(".item-quantity").text(quantity);
  updateSumItems();
}

function updateSumItems() {
  // console.log('hello - inside updateSum');
  let sumItems = 0;
  $(".quantity input").each(function() {
    sumItems += parseInt($(this).val());
  });
  // console.log(sumItems);
  $(".total-items").text(sumItems);
}

$(".checkout-cta").on("click", function(e) {
  e.preventDefault();
  console.log("hello, you just placed an order");

  let name = $(".food-item")
    .map(function(e) {
      // console.log($(this).text().trim())
      return $(this)
        .text()
        .trim();
    })
    .get();

  let price = $(".item-price")
    .map(function() {
      return Number(
        $(this)
          .text()
          .trim()
      );
    })
    .get();

  let quantity = $(".quantity-field")
    .map(function() {
      return Number($(this).val());
    })
    .get();

  // console.log(name, price, quantity);

  let output = []; //{name: , price: , quantity: }
  // console.log(quantity);

  for (let i = 0; i < name.length; ++i) {
    let obj = {};
    if (quantity[i] !== 0) {
      obj.name = name[i];
      obj.price = price[i];
      obj.quantity = quantity[i];
      output.push(obj);
    }
    // console.log(name[i])
    // console.log(price[i])
    // console.log(quantity[i])
  }

  console.log(output);
});
