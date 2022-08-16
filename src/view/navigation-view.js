import BaseView from './base-view.js';
import createAdjacentHtml from './navigation-template.js';

export default class NavigationView extends BaseView {
  constructor() {
    super();

    this.classList.add('main-navigation');
  }

  /**
   * @override
   */
  createAdjacentHtml() {
    return createAdjacentHtml();
  }
}

customElements.define('film-navigation', NavigationView);
