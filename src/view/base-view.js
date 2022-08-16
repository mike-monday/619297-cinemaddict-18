/**
 * Базовое представление
 */
export default class BaseView extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.createAdjacentHtml();
  }

  /**
   * Создаст дополнительную (внутреннюю) html-разметку
   */
  createAdjacentHtml() {
    return '';
  }
}
