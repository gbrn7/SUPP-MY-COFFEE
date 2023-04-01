const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = document.querySelector(".mode-text");
const switchh = document.querySelector(".switch");


toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerHTML = "Light Mode"
  } else {
    modeText.innerHTML = "Dark Mode"
  }
});


$(document).ready(function () {
  $('#example').DataTable();
});

