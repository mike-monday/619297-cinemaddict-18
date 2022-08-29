import BaseView from './base-view.js';
export default class FiltersView extends BaseView {
  constructor() {
    super();

    this.classList.add('sort');
  }

  /**
   * @override
   */
  createAdjacentHtml() {
    return /* html */ `
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    `;
  }
}

customElements.define('film-filters', FiltersView);
