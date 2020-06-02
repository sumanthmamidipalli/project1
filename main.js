// setTimeout(() => {
//   const loader = document.getElementById("loader");
//   loader.style.display = "none";
// }, 6000);

//  window.addEventListener("load", (event) => {

//  });

// var cookie = document.cookie;
// if (cookie.indexOf("visited=", 0) == -1) {
//   var expiration = new Date();
//   expiration.setDate(expiration.getDate() + 1);
//   document.cookie = "visited=1;expires=" + expiration + ";path=/";

//   const loader = document.getElementById("loader");
//   loader.remove();
//   const loadwish = document.getElementById("loadwish");
//   loadwish.remove();
// }

// var l;
// l = setTimeout(() => {
//   const loader = document.getElementById("loader");
//   loader.style.opacity = "0";
//   loader.style.pointerEvents = "none";
// }, 6000);

// function deleteloader() {
//   const loader = document.getElementById("loader");
//   loader.remove();
//   const loadwish = document.getElementById("loadwish");
//   loadwish.remove();
// }

// function deleteloader() {
//   window.stop();
// }

//hiding the menu
const helloPage = document.getElementById("hello-page");
const helloWish = document.getElementById("hello-wish");
const exploreAi = document.getElementById("exploreAi");
const explore = document.getElementById("explore");
const scrollbar = document.getElementById("scrollbar");
const y = document.getElementById("menu");
const bodyPage = document.getElementById("body-wrap");

const menuHide = document.getElementById("logo");

menuHide.addEventListener("mousedown", showHideMenu);

helloPage.addEventListener("click", showHideMenu);
helloPage.addEventListener("touch", showHideMenu);
menuHide.addEventListener("touchcancel", showHideMenu);

function showHideMenu() {
  setTimeout(function () {
    if (y.style.display === "flex") {
      y.style.opacity = "1";
      y.style.transition = "opacity 0.4s ease 1s";
      y.style.display = "none";
      y.style.position = "fixed";
      y.style.marginBottom = "65vh";
    } else {
      y.style.opacity = "1";
      y.style.transition = "opacity 0.4s ease 1s";
      y.style.position = "fixed";
      y.style.display = "flex";
      y.style.marginBottom = "65vh";
    }
  }, 100);
}

helloPage.addEventListener("touch", showHideExplore);
helloPage.addEventListener("click", showHideExplore);
menuHide.addEventListener("click", showHideExplore);
function showHideExplore() {
  const msq = window.matchMedia("(max-width: 1400px)");
  if (msq.matches) {
    const ex = document.getElementById("exp");
    const logosvg = document.getElementById("logosv");
    logosvg.classList.toggle("logosvgactive");
    ex.classList.toggle("exphide");
  }
}

const mq = window.matchMedia("(min-width: 1100px)");
//scaling th home-page down
const body = document.getElementById("body-wrap");
const logoWrap = document.getElementById("logo");

logoWrap.addEventListener("mouseover", scalePage);
function scalePage() {
  const mq = window.matchMedia("(min-width: 1100px)");
  if (mq.matches) {
    const helloPage = document.getElementById("hello-page");
    helloPage.style.transition = "all 0.4s ease";
    helloPage.style.transform = "scale(0.8,0.8)";
  }
}

//scaling the home-page up

logoWrap.addEventListener("mouseout", scalePage1);
function scalePage1() {
  const mq = window.matchMedia("(min-width: 1100px)");
  if (mq.matches) {
    const helloPage = document.getElementById("hello-page");
    helloPage.style.transition = "all 0.4s ease";
    helloPage.style.transform = "scale(1,1)";
  }
}

helloPage.addEventListener("click", pageMove1);
helloPage.addEventListener("touch", pageMove1);

function pageMove1() {
  const body = document.getElementById("body-wrap");
  body.style.transition = "all 0.4s ease";
  body.classList.toggle("bodyStyle");
}

//move the hello-page far down

logoWrap.addEventListener("mousedown", pageMove);
logoWrap.addEventListener("touchcancel", pageMove);
function pageMove() {
  const body = document.getElementById("body-wrap");
  body.style.transition = "all 0.4s ease";
  body.classList.toggle("bodyStyle");
}

//Smooth scrolling

const hep = document.getElementById("hep");
const hep1 = document.getElementById("hep1");
const hep2 = document.getElementById("hep2");
const hep3 = document.getElementById("hep3");

helloPage.addEventListener("wheel", scroll1);

// const mqpm = window.matchMedia("(max-width: 800px)");
// function swipe1(event) {
//   event.preventDefault();
//   if (mqpm.matches) {
//     if (y.style.display === "flex") {
//     } else {
//       if (event.clientX > 0) {
//         document.getElementById("a2").click();
//         document.getElementById("logosv").src = "./images/mghw.svg";
//       } else {
//         console.log("up");
//       }
//     }
//   }
// }

const mqpc = window.matchMedia("(min-width: 100px)");

function scroll1(event) {
  event.preventDefault();
  if (mqpc.matches) {
    if (y.style.display === "flex") {
    } else {
      if (event.deltaY > 0) {
        document.getElementById("a2").click();
        document.getElementById("logosv").src = "./images/mghw.svg";
      } else {
        console.log("up");
      }
    }
  }
}

hep.addEventListener("wheel", scroll2);

function scroll2(event) {
  event.preventDefault();
  if (mqpc.matches) {
    if (event.deltaY > 0) {
      document.getElementById("a3").click();
      document.getElementById("logosv").src = "./images/mghw.svg";
    } else {
      document.getElementById("a1").click();
      document.getElementById("logosv").src = "./images/mgh.svg";
    }
  }
}

hep1.addEventListener("wheel", scroll3);

function scroll3(event) {
  event.preventDefault();
  if (mqpc.matches) {
    if (event.deltaY > 0) {
      document.getElementById("a4").click();
    } else {
      document.getElementById("a2").click();
    }
  }
}

hep2.addEventListener("wheel", scroll4);

function scroll4(event) {
  event.preventDefault();
  if (mqpc.matches) {
    if (event.deltaY > 0) {
      document.getElementById("a5").click();
    } else {
      document.getElementById("a3").click();
    }
  }
}

hep3.addEventListener("wheel", scroll5);

function scroll5(event) {
  event.preventDefault();
  if (mqpc.matches) {
    if (event.deltaY > 0) {
      console.log("down");
    } else {
      document.getElementById("a4").click();
    }
  }
}

// ripple effect
const menubtn1 = document.getElementById("rb1");
const menubtn2 = document.getElementById("rb2");
const menubtn3 = document.getElementById("rb3");
const menubtn4 = document.getElementById("rb4");
const menubtn5 = document.getElementById("rb5");

menubtn1.addEventListener("click", createRipple);
menubtn2.addEventListener("click", createRipple);
menubtn3.addEventListener("click", createRipple);
menubtn4.addEventListener("click", createRipple);
menubtn4.addEventListener("click", createRipple);

function createRipple(e) {
  const mc = window.matchMedia("(max-width: 1100px)");
  if (mc.matches) {
    var d = 100;
    var circle = document.createElement("div");
    this.appendChild(circle);
    circle.style.width = circle.style.height = d + "px";
    circle.style.left = e.clientX - d / 2 + "px";
    circle.style.top = e.clientY - d / 2 + "px";

    circle.classList.add("ripple");
  }
}

menuHide.addEventListener("click", createRipple1);

function createRipple1(e) {
  const mc = window.matchMedia("(max-width: 1100px)");
  if (mc.matches) {
    var circle = document.createElement("div");
    this.appendChild(circle);

    var d = Math.min(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + "px";
    circle.style.position = "fixed";
    circle.style.left = e.clientX - d / 2 + "px";
    circle.style.top = e.clientY - d / 2 + "px";

    circle.classList.add("ripple1");
  }
}
