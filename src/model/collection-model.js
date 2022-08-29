import Model from './model.js';

export default class CollectionModel extends Model {
  #store;
  #items;
  #adaptCallback;

  constructor(store, adaptCallback) {
    super();

    this.#store = store;
    this.#adaptCallback = adaptCallback;
  }

  get #clonedItems() {
    return JSON.parse(JSON.stringify(this.#items));
  }

  async ready() {
    if (!this.#items) {
      this.#items = await this.#store.list();
    }
  }

  find(predicate) {
    const clonedItem = this.#clonedItems.find((item) => predicate(this.#adaptCallback(item)));

    return this.#adaptCallback(clonedItem);
  }

  list() {
    return this.#clonedItems.map(this.#adaptCallback);
  }

}

