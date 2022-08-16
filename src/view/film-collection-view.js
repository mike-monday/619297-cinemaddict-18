import BaseView from './base-view.js';
import createAdjacentHtml from './film-collection-template.js';

export default class FilmCollectionView extends BaseView {
  constructor() {
    super();

    this.classList.add('films-list');

    this.titleView = this.querySelector('.films-list__title');
    this.listView = this.querySelector('.films-list__container');
    this.buttonView = this.querySelector('.films-list__show-more');
  }

  /**
   * @override
   */
  createAdjacentHtml() {
    return createAdjacentHtml();
  }

  setTitleHidden(flag = true) {
    this.titleView.classList.toggle('visually-hidden', flag);

    return this;
  }

  addToList(...views) {
    this.listView.append(...views);

    return this;
  }

  setButtonHidden(flag = true) {
    this.buttonView.toggleAttribute('hidden', flag);

    return this;
  }
}

customElements.define('film-collection', FilmCollectionView);
