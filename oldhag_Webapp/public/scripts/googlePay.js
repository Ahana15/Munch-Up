const allowedCardNetworks = [
  "AMEX",
  "DISCOVER",
  "INTERAC",
  "JCB",
  "MASTERCARD",
  "VISA"
];
const allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"];

if (window.PaymentRequest) {
  const request = createPaymentRequest();

  request
    .canMakePayment()
    .then(function(result) {
      if (result) {
        // Display PaymentRequest dialog on interaction with the existing checkout button
        document
          .getElementById("buyButton")
          .addEventListener("click", onBuyClicked);
      }
    })
    .catch(function(err) {
      console.log(
        "canMakePayment() error! " + err.name + " error: " + err.message
      );
    });
} else {
  console.log("PaymentRequest API not available.");
}

/**
 * Show a PaymentRequest dialog after a user clicks the checkout button
 */
function onBuyClicked() {
  createPaymentRequest()
    .show()
    .then(function(response) {
      // Dismiss payment dialog.
      response.complete("success");
      handlePaymentResponse(response);
      $("#checkout").css("visibility", "hidden");
      $("#completeOrd").css("display", "block");
    })
    .catch(function(err) {
      console.log("show() error! " + err.name + " error: " + err.message);
    });
}

/**
 * Define your unique Google Pay API configuration
 *
 * @returns {object} data attribute suitable for PaymentMethodData
 */
function getGooglePaymentsConfiguration() {
  return {
    environment: "TEST",
    apiVersion: 2,
    apiVersionMinor: 0,
    merchantInfo: {
      // A merchant ID is available after approval by Google.
      // 'merchantId':'01234567890123456789',
      merchantName: "Example Merchant"
    },
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: allowedCardAuthMethods,
          allowedCardNetworks: allowedCardNetworks
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          // Check with your payment gateway on the parameters to pass.
          // @see {@link https://developers.google.com/pay/api/web/reference/object#Gateway}
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId"
          }
        }
      }
    ]
  };
}

/**
 * Create a PaymentRequest
 *
 * @returns {PaymentRequest}
 */
function createPaymentRequest() {
  // Add support for the Google Pay API.
  const methodData = [
    {
      supportedMethods: "https://google.com/pay",
      data: getGooglePaymentsConfiguration()
    }
  ];
  // Add other supported payment methods.
  methodData.push({
    supportedMethods: "basic-card",
    data: {
      supportedNetworks: Array.from(allowedCardNetworks, network =>
        network.toLowerCase()
      )
    }
  });

  let name = $(".food-item")
    .map(function(e) {
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

  let output = []; //{name: , price: , quantity: }

  for (let i = 0; i < name.length; ++i) {
    let obj = {};
    if (quantity[i] !== 0) {
      obj.label = name[i];
      obj.amount = {
        currency: "CAD",
        value: price[i] * quantity[i]
      };
      output.push(obj);
    }
  }
  output.push({
    label: "Tax",
    amount: {
      currency: "CAD",
      value: $("#basket-tax")
        .text()
        .trim()
    }
  });

  const details = {
    total: {
      label: "Total",
      amount: {
        currency: "CAD",
        value: $("#basket-total")
          .text()
          .trim()
      }
    },
    displayItems: output
  };

  const options = {
    requestPayerEmail: true,
    requestPayerName: true
  };

  return new PaymentRequest(methodData, details, options);
}

/**
 * Process a PaymentResponse
 *
 * @param {PaymentResponse} response returned when a user approves the payment request
 */
function handlePaymentResponse(response) {
  const formattedResponse = document.createElement("pre");
  formattedResponse.appendChild(
    document.createTextNode(JSON.stringify(response.toJSON(), null, 2))
  );
  document
    .getElementById("checkout")
    .insertAdjacentElement("afterend", formattedResponse);
}

// /**
//  * Display an error message for debugging
//  *
//  * @param {string} text message to display
//  */
// function showErrorForDebugging(text) {
//   const errorDisplay = document.createElement("code");
//   errorDisplay.style.color = "red";
//   errorDisplay.appendChild(document.createTextNode(text));
//   const p = document.createElement("p");
//   p.appendChild(errorDisplay);
//   document.getElementById("checkout").insertAdjacentElement("afterend", p);
// }
