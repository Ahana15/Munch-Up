$(document).ready(function() {
  $(".food-list").on("click", function() {
    // console.log(this);
    // console.log($(this).html().trim())
    const childrenClass = $(this).html().trim();
    
    // const ID = $(this).find($(this).html())
    // console.log(ID);
    console.log(childrenClass);
    $(`#${childrenClass}`).toggle();
  });
});
