function ArrowInit(arrowStr) {
  "use strict";
  var arrow = document.getElementById(arrowStr);
  window.addEventListener(
    "scroll",
    _.debounce(
      toggleArrow.bind(null, arrow),
      150
    )
    , false);
}

function toggleArrow(elm) {
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if (scrollTop > 200) {
    elm.classList.add("active");
  } else {
    elm.classList.remove("active");
  }
}

function scrollPos() {
  var elm = document.getElementById('an-element');
  var scroll = elm.getBoundingClientRect();
  console.log(scroll);
}
