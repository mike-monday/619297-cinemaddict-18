import BaseView from './base-view.js';
import createAdjacentHtml from './film-card-template.js';

export default class FilmCardView extends BaseView {
  constructor() {
    super();

    this.classList.add('film-card');
  }

  /**
   * @override
   */
  createAdjacentHtml() {
    return createAdjacentHtml();
  }

}

customElements.define('film-card', FilmCardView);
