$(document).ready(function() {
  $(".food-list").on("click", function() {
    const childrenClass = $(this)
      .html()
      .trim();
    $(`#${childrenClass}`).toggle();
  });

  $("#completed-header").on("click", function() {
    $("#completed-table-items").toggle();
  })

  $("#unaccepted-header").on("click", function() {
    $("#unaccepted-table-items").toggle();
  })

  $("#accepted-header").on("click", function() {
    $("#accepted-table-items").toggle();
  })
});
