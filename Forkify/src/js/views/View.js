import icon from "../../img/icons.svg";

export default class View {
  data;
  errorMessage = "Not Found";
  render(data) {
    this.data = data;
    const markup = this.generateMarkup();
    this.clear();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner = function () {
    const markup = `<div class="spinner">
      <svg>
        <use href="${icon}#icon-loader"></use>
      </svg>
    </div>`;
    this.clear();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  };

  renderError(message = this.errorMessage) {
    console.log(message);
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icon}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this.clear();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  clear() {
    this.parentElement.innerHTML = "";
  }
}
