// import "core-js/stable";
// import "regenerator-runtime/runtime";
// import icon from "../img/icons.svg";
const recipeContainer = document.querySelector(".recipe");
const spinner = function(parentEl) {
    const markup = `<div class="spinner">
    <svg>
      <use href="${icon}#icon-loader"></use>
    </svg>
  </div>`;
    parentEl.innerHTML = "";
    parentEl.insertAdjacentHTML("afterbegin", markup);
};
const getRecipe = async function() {
    try {
        const res = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886");
        const data = await res.json();
        if (!res.ok) throw new Error("error occure");
        let { recipe } = data.data;
        recipe = {
            id: recipe.id,
            title: recipe.title,
            cookingTime: recipe.cooking_time,
            image: recipe.image_url,
            ingredients: recipe.ingredients,
            publisher: recipe.publisher,
            servings: recipe.servings,
            sourceUrl: recipe.source_url
        };
        const renderRecipe = `
    <figure class="recipe__fig">
          <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icon}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icon}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icon}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icon}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${icon}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icon}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${recipe.ingredients.map((item)=>{
            return `<li class="recipe__ingredient">
                        <svg class="recipe__icon">
                            <use href="${icon}#icon-check"></use>
                        </svg>
                        <div class="recipe__quantity">${item.quantity}</div>
                        <div class="recipe__description">
                            <span class="recipe__unit">${item.unit}</span>
                            ${item.description}
                        </div>
                        </li>`;
        }).join("")}
            

            
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${recipe.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${icon}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`;
        recipeContainer.innerHTML = "";
        recipeContainer.insertAdjacentHTML("afterbegin", renderRecipe);
    } catch (err) {
        console.log(err);
    }
};
getRecipe();

//# sourceMappingURL=index.62406edb.js.map
