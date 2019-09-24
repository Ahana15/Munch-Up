// $(document).ready(function() {
//   $("#twilio").submit(function(e) {
//     e.preventDefault();
//     $("#itemsubmission").attr("disabled", true);

//     const accountSid = "AC6c33d89c431c0e398a0607ed45eed33f"; // User Account SID from www.twilio.com/console
//     const authToken = "891e10ad3d7fc8e669491004901509cf"; // User Auth Token from www.twilio.com/console

//     $.ajax({
//       type: "POST",
//       url:
//         "https://api.twilio.com/2010-04-01/Accounts/" + SID + "/Messages.json",
//       data: {
//         To: "+918967385884",
//         From: "+12016902194",
//         Body: "Hello World"
//       }
//     });
//   });
// });
$(document).ready(function() {
  let isShow = {};

  $(".food-list").on("click", function() {
    const idName = $(this)
      .html()
      .trim();

    if (isShow[idName] === undefined) {
      isShow[idName] = true;
    }

    if (isShow[idName]) {
      $(`#${idName}`).hide();
    } else {
      $(`#${idName}`).show();
    }

    isShow[idName] = !isShow[idName];
  });
});
