import View from "./View";
import icon from "../../img/icons.svg";

class bookmarksView extends View {
  parentElement = document.querySelector(".bookmarks__list");

  generateMarkup() {
    return this.data
      .map((res) => {
        return `<li class="preview">
        <a class="preview__link preview__link--active" href="#${res.id}">
          <figure class="preview__fig">
            <img src="${res.image}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${res.title}</h4>
            <p class="preview__publisher">${res.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icon}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>`;
      })
      .join("");
  }
}
export default new bookmarksView();
