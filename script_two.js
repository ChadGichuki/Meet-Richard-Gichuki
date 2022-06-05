// Give a clue to the user to click on the titles
window.onload = function(e) {
    alert("Click on the Titles for Interesting facts")
    setTimeout(5000);
}


const edu = document.querySelector("#education");
const exp = document.querySelector("#experience");
const skill = document.querySelector("#skills");

// Display the hidden content (fun facts in h2 tag) on clicking the headings on bio page
edu.addEventListener('click', function(e) {
    document.querySelector("#education + h2.hidden").className = "display";
    console.log(e);
})

exp.addEventListener('click', function(e) {
    document.querySelector("#experience + .hidden").className = "display";
})

skills.addEventListener('click', function(e) {
    document.querySelector("#skills + .hidden").className = "display";
})