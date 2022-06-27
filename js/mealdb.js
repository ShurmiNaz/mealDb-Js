const searchFood = () => {
     const searchField = document.getElementById('search-field');
     const searchText = searchField.value;
     searchField.value = '';


     // console.log(searchText);
     if (searchText == '') {
          const text = document.getElementById('write-meal-name');
          const p = document.createElement('p')
          p.innerText = 'Please Write your favorite food name in search bar.....';
          text.appendChild(p);
     }
     else {

          const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
          fetch(url)
               .then(res => res.json())
               .then(data => displaySearchResult(data.meals))

     }



}

const displaySearchResult = meals => {

     const searchResult = document.getElementById('food-display-box');
     searchResult.textContent = "";
     meals.forEach(meal => {
          // console.log(meal)
          const div = document.createElement('div');
          div.classList.add('col');
          div.innerHTML = `
          <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                         <h5 class="card-title">${meal.strMeal}</h5>
                         <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                    </div>
               </div>
          `;
          searchResult.appendChild(div);
     })
};
const loadMealDetail = mealId => {
     // console.log(mealId);
     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
     fetch(url)
          .then(res => res.json())
          .then(data => displayMealDetail(data.meals[0]))
};
const displayMealDetail = meal => {
     console.log(meal);
     const displayMeal = document.getElementById('displayMeal');
     displayMeal.textContent = "";
     const div = document.createElement('div');
     div.classList.add('card');
     div.innerHTML = `
          <div  class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                         <h5 class="card-title">${meal.strMeal}</h5>
                         <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                         <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
                    </div>
               </div>
          `;
     displayMeal.appendChild(div);



}