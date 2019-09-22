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

let fadeTime = 150;

/* Assign actions */
$(".quantity input").change(function () {
  updateQuantity(this);
});

$(document).ready(function () {
  updateSumItems();
});

/* Recalculate cart */
function recalculateCart() {
  let subtotal = 0;
  /* Sum up row totals */
  $(".item-subtotal").each(function () {
    subtotal += parseFloat($(this).text());
  });

  let tax = subtotal * 0.13;

  /* Calculate totals */
  let total = subtotal + tax;

  $(".final-value").fadeOut(fadeTime, function () {
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
    .each(function () {
      // console.log('hello');
      $(this).fadeOut(fadeTime, function () {
        $(this).text(linePrice.toFixed(2));
        recalculateCart();
        $(this).fadeIn(fadeTime);
      });
    });

  updateSumItems();
}

function updateSumItems() {
  let sumItems = 0;
  $(".quantity input").each(function () {
    sumItems += parseInt($(this).val());
  });
  $(".total-items").text(sumItems);
}

$(".checkout-cta").on("click", function (e) {
  // e.preventDefault();

  let name = $(".food-item")
    .map(function (e) {
      return $(this)
        .text()
        .trim();
    })
    .get();

  let price = $(".item-price")
    .map(function () {
      return Number(
        $(this)
          .text()
          .trim()
      );
    })
    .get();

  let quantity = $(".quantity-field")
    .map(function () {
      return Number($(this).val());
    })
    .get();

  let output = []; //{name: , price: , quantity: }

  for (let i = 0; i < name.length; ++i) {
    let obj = {};
    if (quantity[i] !== 0) {
      obj.name = name[i];
      obj.price = price[i];
      obj.quantity = quantity[i];
      output.push(obj);
    }
  }
  // $.ajax("/userorderstatus", { method: "POST", data: output });
  // console.log(output);


  // await $(".beep").submit(event => {
  //   // event.preventDefault();
  //   // console.log(event);
  console.log('🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕fuckkkkkkkkkkkkkkkkkkkkkkello inside summary-checkout');
  // $.ajax("/userorderstatus",
  //   {
  //     type: "POST",
  //     data: JSON.stringify(output),
  //     contentType: 'application/json',
  //     // success: function (response) {
  //     //   console.log(response)
  //     //   window.location.replace('/userorderstatus')
  //     // $(location).attr('href', 'localhost:3000/userorderstatus')
  //     // }
  //   });
  // });


});


