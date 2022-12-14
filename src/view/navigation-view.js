import ComponentView, { html } from './component-view.js';
export default class NavigationView extends ComponentView {
  constructor() {
    super();

    this.classList.add('main-navigation');
  }

  /**
   * @override
   */
  createAdjacentHtml() {
    return html`
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
    `;
  }
}

customElements.define(String(NavigationView), NavigationView);
