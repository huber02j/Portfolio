// Make Navbar words highlight
let navLinks = document.querySelectorAll("nav ul li a")

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
  console.log(fromTop);
  navLinks.forEach((link) => {
    let section = document.querySelector(link.hash);
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
      link.classList.add("current");
    } else {
      link.classList.remove("current")
    }

  });
});

// var shiftWindow = function() { scrollBy(0, 100); console.log("Hello"); };
// if (location.hash) shiftWindow();
// window.addEventListener("hashchanged", shiftWindow);
