import ComponentView, {html} from './component-view.js';

export default class CardView extends ComponentView {
  #id;

  /**
   * @typedef CardViewInit
   * @prop {string} title
   * @prop {number} rating
   * @prop {string} year
   * @prop {string} duration
   * @prop {string} genre
   * @prop {string} posterUrl
   * @prop {string} summary
   * @prop {string} commentsCount
   * @prop {boolean[]} buttonStates
   */

  /**
   * @param {CardViewInit} init
   */
  constructor(id, init) {
    super(init);

    this.#id = id;
    this.classList.add('film-card');
    this.querySelectorAll('button').forEach((buttonView, index) => {
      buttonView.classList.toggle('film-card__controls-item--active', init.buttonStates[index]);
    });

    this.addEventListener('click', this.handleClick);
  }

  handleClick(event) {
    if (event.target.closest('button')) {
      return;
    }
    this.dispatchEvent(
      new CustomEvent('card-click', {
        detail: this.#id,
        bubbles: true,
      })
    );
  }

  /**
   * @override
   * @param {CardViewInit} init
   */
  createAdjacentHtml(init) {
    return html`
      <a class="film-card__link">
        <h3 class="film-card__title">${init.title}</h3>
        <p class="film-card__rating">${init.rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${init.year}</span>
          <span class="film-card__duration">${init.duration}</span>
          <span class="film-card__genre">${init.genre}</span>
        </p>
        <img class="film-card__poster" src="${init.posterUrl}"  alt="">
        <p class="film-card__description">${init.summary}</p>
        <span class="film-card__comments">${init.commentsCount}</span>
      </a>
      <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
        <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
      </div>
    `;
  }

}

customElements.define(String(CardView), CardView);
