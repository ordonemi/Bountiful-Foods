let hambutton = document.querySelector("#menu");
let navigation = document.querySelector(".navigation");
hambutton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hambutton.classList.toggle("open");
})