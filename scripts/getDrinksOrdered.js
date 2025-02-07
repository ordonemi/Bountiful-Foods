const drinks = document.querySelector("#drinks-ordered");

if (localStorage.getItem("drinksOrdered")){
    drinks.innerHTML = localStorage.getItem("drinksOrdered");
}
else{
    drinks.innerHTML = 0;
}