// conflict bug solution
// var $ = jQuery.noConflict();

// $(function () {
  const expandItem = document.querySelectorAll(".expanding_item");

  expandItem.forEach((item) => {
    item.addEventListener("mouseover", () => {
      removeActiveClass();
      item.classList.add("active");
    });
  });

  function removeActiveClass() {
    expandItem.forEach((item) => {
      item.classList.remove("active");
    });
  }

  // *********** expand using jquey ************
  // const $expandItem = $(".expanding_item");
  // $expandItem.on("mouseover", function() {
  //   removeActiveClass();
  //   $(this).addClass("active");
  // });

  // function removeActiveClass() {
  //   $expandItem.removeClass("active");
  // }


// });
