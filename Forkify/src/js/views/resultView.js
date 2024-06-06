import View from "./View";
import icon from "../../img/icons.svg";
class resultView extends View {
  parentElement = document.querySelector(".results");

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
          </div>
        </a>
      </li>`;
      })
      .join("");
  }
}
export default new resultView();
