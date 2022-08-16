import BaseView from './base-view.js';
import createAdjacentHtml from './user-rank-template.js';

export default class UserRankView extends BaseView {
  constructor() {
    super();

    this.classList.add('profile');
  }

  /**
   * @override
   */
  createAdjacentHtml() {
    return createAdjacentHtml();
  }
}

customElements.define('user-rank', UserRankView);
