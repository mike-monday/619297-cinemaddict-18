import BaseView from './base-view.js';
import createAdjacentHtml from './film-detail-template.js';

export default class FilmDetailView extends BaseView {
  constructor() {
    super();

    this.classList.add('film-details');
  }

  /**
   * @override
   */
  createAdjacentHtml() {
    return createAdjacentHtml();
  }
}

customElements.define('film-detail', FilmDetailView);
