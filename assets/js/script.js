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
