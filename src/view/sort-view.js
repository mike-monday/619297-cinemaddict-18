import ComponentView, { html } from './component-view.js';
export default class SortView extends ComponentView {
  constructor() {
    super();

    this.classList.add('sort');
  }

  /**
   * @override
   */
  createAdjacentHtml() {
    return html`
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    `;
  }
}

customElements.define(String(SortView), SortView);
