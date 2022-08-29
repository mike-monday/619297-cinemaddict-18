import ComponentView, {html} from './component-view.js';

export default class RankView extends ComponentView {
  constructor() {
    super();

    this.classList.add('profile');
  }

  /**
   * @override
   */
  createAdjacentHtml() {
    return html`
      <p class="profile__rating" > Movie Buff</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    `;
  }
}

customElements.define(String(RankView), RankView);
