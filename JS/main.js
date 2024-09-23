

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



// För att det här scriptet ska fungera så behöver du lägga till en .dark klass i din css där du stylar dina färger
// du behöver också en checkbox med id="darkmode-switch" i din HTML


// const darkmodeSwitch = document.querySelector('#darkmode-switch')
// const hasDarkmode = localStorage.getItem('darkmode')

// if(hasDarkmode == null) {
//   if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     enableDarkMode()
//   } else {
//     disableDarkMode()
//   }
// } else if(hasDarkmode === 'on') {
//   enableDarkMode()
// } else if(hasDarkmode === 'off') {
//   disableDarkMode()
// }



// darkmodeSwitch.addEventListener('change', () => {
//   if(darkmodeSwitch.checked) {
//     enableDarkMode()
//     localStorage.setItem('darkmode', 'on')
//   } else {
//     disableDarkMode()
//     localStorage.setItem('darkmode', 'off')
//   }
// })

// function enableDarkMode() {
//   darkmodeSwitch.checked = true
//   document.documentElement.classList.add('dark')
// }
// function disableDarkMode() {
//   darkmodeSwitch.checked = false
//   document.documentElement.classList.remove('dark')
// }


// accordion

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



  