let kutu1 = document.querySelector("#kutu1");
let kutu2 = document.querySelector("#kutu2");
let ekle = document.querySelector("#ekle");
let img = document.querySelector("img");

let sol1 = 0,
  sol2 = 700,
  sag1 = 1260,
  sag2 = 500;
let soldur1, soldur2, sagdur1, sagdur2;


function ileri1() {
  sol1 += 1;
  if (sol1 <= 600) {
    kutu1.style.left = sol1 + "px";
    kutu1.innerHTML = sol1 + "px";
  } else {
    setTimeout(ekle1, 1);
    clearInterval(soldur1);
    soldur2 = setInterval(ileri2, 10);
  }
}

function ileri2() {
  sol2 += 1;
  if (sol2 <= 1260) {
    kutu2.style.left = sol2 + "px";
    kutu2.innerHTML = sol2 + "px";
  } else {
    clearInterval(soldur2);
    sagdur1 = setInterval(geri1, 10);
  }
}
function geri1() {
  sag1 -= 1;
  if (sag1 >= 600) {
    kutu2.style.left = sag1 + "px";
    kutu2.innerHTML = sag1 + "px";
  } else {
    setTimeout(ekle1, 1);
    clearInterval(sagdur1);
    sagdur2 = setInterval(geri2, 10);
  }
}
function geri2() {
  sag2 -= 1;
  if (sag2 >= 0) {
    kutu1.style.left = sag2 + "px";
    kutu1.innerHTML = sag2 + "px";
  } else {
    clearInterval(sagdur2);
    setTimeout(sıfırla, 1);
  }
}

function sıfırla() {
  (sol1 = 0), (sol2 = 700), (sag1 = 1200), (sag2 = 600);
  soldur1 = setInterval(ileri1, 10);
}

soldur1 = setInterval(ileri1, 10);

function ekle1() {
  ekle.style.display = "block";
  img.style.display = "block";



  setInterval(function () {
    ekle.style.display = "none";
    img.style.display = "none";
  }, 2000);
}
//******************************************* */

const input = document.querySelector(".cp");
const btn = document.querySelector("button");
sass = 0;
btn.addEventListener("click", () => {
  const body = document.querySelector("body");
  const span = document.createElement("span");
  span.classList.add("pop");
  body.appendChild(span);
  sass += 30;

  span.innerHTML = "Giriş yapıldı";
  span.style.bottom += sass + "px";
  console.log(span.style.bottom, typeof span.style.bottom);
  console.log(sass);
  if (sass > 180) {
    sass = 0;
    span.style.bottom = 30 + "px";
    console.log(span.style.bottom, typeof span.style.bottom);
  }

  setInterval(function () {
    span.remove();
  }, 1000);
});