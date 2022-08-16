import BaseView from './base-view.js';
import createAdjacentHtml from './filters-template.js';

export default class FiltersView extends BaseView {
  constructor() {
    super();

    this.classList.add('sort');
  }

  /**
   * @override
   */
  createAdjacentHtml() {
    return createAdjacentHtml();
  }
}

customElements.define('film-filters', FiltersView);
