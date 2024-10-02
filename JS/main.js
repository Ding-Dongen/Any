

// taken from Dominik at https://dev.to/wgnrd/adding-a-dark-mode-to-your-website-using-scss-4pdc
let checkbox = document.querySelector("input[name=theme_switch]");

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.setAttribute("data-theme", "dark");
  checkbox.checked = true;
} else {
  document.documentElement.setAttribute("data-theme", "light");
  checkbox.checked = false;
}

// switch theme if checkbox is engaged
checkbox.addEventListener("change", (cb) => {
  document.documentElement.setAttribute(
    "data-theme",
    cb.target.checked ? "dark" : "light"
  );
});




// accordion taken from w3

var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

  