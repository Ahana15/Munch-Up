let fadeTime = 150;

/* Assign actions */
$(".quantity input").change(function() {
  updateQuantity(this);
});

$(document).ready(function() {
  updateSumItems();
});

/* Recalculate cart */
function recalculateCart() {
  let subtotal = 0;
  /* Sum up row totals */
  $(".item-subtotal").each(function() {
    subtotal += parseFloat($(this).text());
  });

  let tax = subtotal * 0.13;

  /* Calculate totals */
  let total = subtotal + tax;

  $(".final-value").fadeOut(fadeTime, function() {
    $("#basket-subtotal").html(subtotal.toFixed(2));
    $("#basket-tax").html(tax.toFixed(2));
    $("#basket-total").html(total.toFixed(2));

    if (total == 0) {
      $(".checkout-cta").fadeOut(fadeTime);
    } else {
      $(".checkout-cta").fadeIn(fadeTime);
    }
    $(".final-value").fadeIn(fadeTime);
  });
}

/* Update quantity */
function updateQuantity(quantityInput) {
  let productRow = $(quantityInput)
    .parent()
    .parent()
    .parent();
  let price = parseFloat(
    productRow
      .children(".table-price")
      .children(".item-price")
      .text()
  );
  let quantity = $(quantityInput).val();
  let linePrice = price * quantity;

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

  updateSumItems();
}

function updateSumItems() {
  let sumItems = 0;
  $(".quantity input").each(function() {
    sumItems += parseInt($(this).val());
  });
  $(".total-items").text(sumItems);
}
