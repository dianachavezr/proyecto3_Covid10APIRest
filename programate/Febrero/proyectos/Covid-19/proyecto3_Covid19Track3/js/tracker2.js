
// Add active class to the current button (highlight it)
let icono = document.getElementById("nav");
let btns = icono.getElementsByClassName("navbar");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

