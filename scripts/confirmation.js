let url = new URL(window.location);
let params = url.searchParams;
let day = new Date();

if (localStorage.getItem("drinksOrdered"))
{
    let drinksOrdered = parseInt(localStorage.getItem("drinksOrdered"));
    drinksOrdered++;
    localStorage.setItem("drinksOrdered",drinksOrdered.toString());
}
else
{
    localStorage.setItem("drinksOrdered",1);
}

document.querySelector("#order-name").innerHTML = params.get("first-name");
document.querySelector("#order-email2").innerHTML = params.get("email");
document.querySelector("#order-email").innerHTML = params.get("email");
document.querySelector("#order-phone").innerHTML = params.get("phone");
document.querySelector("#order-date").innerHTML = day.toDateString();
document.querySelector("#first").innerHTML = params.get("first-fruit");
document.querySelector("#second").innerHTML = params.get("second-fruit");
document.querySelector("#third").innerHTML = params.get("third-fruit");

if (params.get("special-instructions") == '')
{
    document.querySelector("#order-instructions").innerHTML = "None";
}
else
{
    document.querySelector("#order-instructions").innerHTML = params.get("special-instructions");
}

fruitURL = 'data/fruits.json';
let carbs = 0;
let protein = 0;
let fat = 0;
let sugar = 0;
let calories = 0;

async function getFruitData(){
    const response = await fetch(fruitURL);
    const data = await response.json();
    addNutrition(data);
    document.querySelector("#carbs").innerHTML=`${carbs}g`;
    document.querySelector("#protein").innerHTML=`${protein}g`;
    document.querySelector("#fat").innerHTML=`${fat}g`;
    document.querySelector("#sugar").innerHTML=`${sugar}g`;
    document.querySelector("#calories").innerHTML=calories;
}

function addNutrition(data){
    data.forEach(fruit => {
        if (fruit.name == params.get('first-fruit'))
        {
            carbs += fruit.nutritions.carbohydrates;
            protein += fruit.nutritions.protein;
            fat += fruit.nutritions.fat;
            sugar += fruit.nutritions.sugar;
            calories += fruit.nutritions.calories;
        }
        else if (fruit.name == params.get('second-fruit'))
        {
            carbs += fruit.nutritions.carbohydrates;
            protein += fruit.nutritions.protein;
            fat += fruit.nutritions.fat;
            sugar += fruit.nutritions.sugar;
            calories += fruit.nutritions.calories;
        }
        else if (fruit.name == params.get('third-fruit'))
        {
            carbs += fruit.nutritions.carbohydrates;
            protein += fruit.nutritions.protein;
            fat += fruit.nutritions.fat;
            sugar += fruit.nutritions.sugar;
            calories += fruit.nutritions.calories;
        }
    });
}

getFruitData();

