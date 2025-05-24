//grab the body and buton
const bodyEl = document.body;
const btnEl = document.getElementById("btn");
btnEl.addEventListener("click", togggleDarkMode)
//add even lidster to body element. can also use onclick = toggledarkMode on button tag
function togggleDarkMode() {
    bodyEl.classList.toggle("dark");
    if (btnEl.innerHTML === "Dark") {
        btnEl.innerHTML = "Light";
        btnEl.setAttribute("style", "background-color: #fff; color: #000");
    } else {
        btnEl.innerHTML = "Dark";
        btnEl.style.backgroundColor = "white";
        btnEl.setAttribute("style", "background-color: #000; color: #fff");

    }
}
//grab overlay
const modalPageEl = document.getElementById("modal-overlay");
//display modal function
function displayModal() {
    modalPageEl.style.display = "block";
}
//class modal function
function closeModal() {
    modalPageEl.style.display = "none";
}
