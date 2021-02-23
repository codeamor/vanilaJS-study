const $wrapper = $(".wrapper");
const $items = $wrapper.find(".item");

// $wrapper.on("click", ".item", function (e) {
//   e.stopPropagation();
//   $(this).toggleClass("open").siblings().removeClass("open");
// });

// $("body").on("click", function (e) {
//   $items.removeClass("open");
// });

$("body").on("click", function (e) {
  const item = $(e.target);
  item.is(".item")
    ? item.toggleClass("open").siblings().removeClass("open")
    : $items.removeClass("open");
});
