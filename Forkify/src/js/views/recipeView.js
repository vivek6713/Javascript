import icon from "../../img/icons.svg";
import View from "./View.js";

class recipeView extends View {
  parentElement = document.querySelector(".recipe");
  errorMessage = "We could not find that recipe. Please try another one!";

  addHandlerRender(handler) {
    window.addEventListener("hashchange", handler);
    window.addEventListener("load", handler);
  }

  addHandlerAddBookmark(handler) {
    this.parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--bookmark");
      console.log(btn);
      if (!btn) return;
      handler();
    });
  }

  generateMarkup() {
    return `
    <figure class="recipe__fig">
          <img src="${this.data.image}" alt="${
      this.data.title
    }" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this.data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icon}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${
              this.data.cookingTime
            }</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icon}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${
              this.data.servings
            }</span>
            <span class="recipe__info-text">servings</span>
          </div>

          <div class="recipe__user-generated">
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${icon}#icon-bookmark${
      this.data.bookmarked ? "-fill" : ""
    }"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this.data.ingredients
            .map((item) => {
              return `<li class="recipe__ingredient">
                        <svg class="recipe__icon">
                            <use href="${icon}#icon-check"></use>
                        </svg>
                        <div class="recipe__quantity">${
                          item.quantity ? item.quantity : ""
                        }</div>
                        <div class="recipe__description">
                            <span class="recipe__unit">${
                              item.unit ? item.unit : ""
                            }</span>
                            ${item.description}
                        </div>
                        </li>`;
            })
            .join("")}
          </ul>
        </div>
        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${
              this.data.publisher
            }</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this.data.sourceUrl}"
            target="_blank">
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${icon}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`;
  }
}

export default new recipeView();
