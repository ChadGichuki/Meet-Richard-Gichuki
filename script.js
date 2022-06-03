const intro1 = document.querySelector(".intro1");
const intro2 = document.querySelector(".intro2");
const intro3 = document.querySelector(".intro3");

intro1.addEventListener('mouseover', function(e) {
    intro1.style.background = "#647C90";
    intro1.style.transition = "transform .8s";
    intro1.style.transform = "scale(1.2)";
})

intro1.addEventListener('mouseleave', function(e) {
    intro1.style.background = "none";
    intro1.style.transition = "transform .8s";
    intro1.style.transform = "scale(1)";
})


intro2.addEventListener('mouseover', function(e) {
    intro2.style.background = "#647C90";
    intro2.style.transition = "transform .8s";
    intro2.style.transform = "scale(1.2)";
})

intro2.addEventListener('mouseleave', function(e) {
    intro2.style.background = "none";
    intro2.style.transition = "transform .8s";
    intro2.style.transform = "scale(1)";
})

intro3.addEventListener('mouseover', function(e) {
    intro3.style.background = "#647C90";
    intro3.style.transition = "transform .8s";
    intro3.style.transform = "scale(1.2)";
})

intro3.addEventListener('mouseleave', function(e) {
    intro3.style.background = "none";
    intro3.style.transition = "transform .8s";
    intro3.style.transform = "scale(1)";
})