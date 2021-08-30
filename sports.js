document.getElementById("button-addon2").addEventListener("click", function(){
    var input = document.getElementById("input-field");
    var inputValue = input.value;
   
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(res => res.json())
    .then(data => loadMeals(data.meals))

})

function loadMeals(meals){
   
    for(const meal of meals){
        // console.log(meal)
        var div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
        <div onclick="loadDetails(${meal.idMeal})" id="card" class="card">
            <img   src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">T${meal.strInstructions.slice(0,150)} This content is a little bit longer.</p>
            </div>
          </div>`
          var divContainer = document.getElementById("div-container");
          divContainer.appendChild(div);
    }
   
}


function loadDetails(id){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => showdetais(data.meals))
}

function showdetais(details){
    for(detail of details){
        console.log(detail)
        var div = document.createElement("div");
        div.innerHTML = `
        <div class="text-white w-50 mx-auto bg-secondary">
        <h3>${detail.strCategory}</h3>
        <p>${detail.strInstructions}</p>
        <button class="bg-info w-50 mx-auto"><a href="${detail.strYoutube}"></a>buy now</button>
        </div`
        var detaisContainer = document.getElementById("show-detais");
        detaisContainer.appendChild(div)
    }
    
}