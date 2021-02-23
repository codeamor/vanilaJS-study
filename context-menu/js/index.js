const wrapper = document.querySelector(".wrapper");
const items = document.querySelectorAll(".item");

// 이렇게 하면 감시하는 이벤트가 많아져서 성능 저하로 이어짐.
// items.forEach((item) => {
//   item.addEventListener("click", function (e) {
//     item.classList.toggle("open");
//     items.forEach(function (el) {
//       if (el !== item) el.classList.remove("open");
//     });
//   });
// });

// 하위 이벤트에서 클릭 이벤트가 발생하면 이벤트를 버블링으로 상위로 전달함.
// 상위인 wrapper에 click 이벤트가 걸려 있으므로 실행 됨. 하지만 실제 클릭이 발생한 대상은 item임.

/*
wrapper.addEventListener("click", function (e) {
  const targetEl = e.target;
  if (!targetEl.classList.contains("item")) return;
  // wrapper보다 body가 상위 요소이기 때문에 이벤트 확산(버블링)을 막아주어야 외부 클릭 시 사라지는 이벤트가 제대로 적용 됨!
  e.stopPropagation();
  targetEl.classList.toggle("open");
  items.forEach(function (el) {
    if (el !== targetEl) el.classList.remove("open");
  });
});

// 외부를 클릭했을 때 사라지게 만들기
document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("context")) return;
  items.forEach(function (el) {
    el.classList.remove("open");
  });
});
*/

// 이벤트 리스너 하나로 합치기
// 조건문이 많아짐, 하나의 이벤트에 의존성이 커짐.
document.body.addEventListener("click", function (e) {
  const targetClassList = e.target.classList;
  if (targetClassList.contains("context")) return;
  if (targetClassList.contains("item")) {
    targetClassList.toggle("open");
    items.forEach(function (el) {
      if (el !== e.target) el.classList.remove("open");
    });
    return;
  }
  items.forEach(function (el) {
    el.classList.remove("open");
  });
});
