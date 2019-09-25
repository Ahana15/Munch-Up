$(document).ready(function() {
  $(".food-list").on("click", function() {
    const childrenClass = $(this)
      .html()
      .trim();
    $(`#${childrenClass}`).toggle();
  });


  // console.log($(".status"));

  const status = document.querySelectorAll(".status");
  // console.log(status);

  status.forEach(function(order) {
    // console.log($(order).parent());
    // console.log(order);
    console.log(order.parentElement.nextElementSibling);

    if (order.innerHTML === "Not Accepted" || order.innerHTML === "Accepted - In Progress") {
      order.parentElement.nextElementSibling.style.display = "show";
    } else {
      order.parentElement.nextElementSibling.style.display = "none";
    }
  })
});
