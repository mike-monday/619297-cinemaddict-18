import ComponentView, { html } from './component-view.js';
export default class CollectionView extends ComponentView {
  constructor() {
    super();

    this.classList.add('films-list');

    this.titleView = this.querySelector('.films-list__title');
    this.listView = this.querySelector('.films-list__container');
    this.buttonView = this.querySelector('.films-list__show-more');
    // this.filmTitle = this.querySelector('film-card__title');
  }

  /**
   * @override
   */
  createAdjacentHtml() {
    return html`
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

      <div class="films-list__container"></div>

      <button class="films-list__show-more">Show more</button>
    `;
  }

  setTitleHidden(flag = true) {
    this.titleView.classList.toggle('visually-hidden', flag);

    return this;
  }

  setCards(...views) {
    this.listView.replaceChildren(...views);

    return this;
  }

  setButtonHidden(flag = true) {
    this.buttonView.toggleAttribute('hidden', flag);

    return this;
  }
  // setTitle(film) {
  //   this.filmTitle.textContent = film
  // }
}

customElements.define(String(CollectionView), CollectionView);
