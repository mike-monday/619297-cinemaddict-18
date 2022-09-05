import CollectionModel from './collection-model.js';

/**
 * @template Item
 * @template {Adapter} ItemAdapter
 * @extends CollectionModel<Item,ItemAdapter>
 */
export default class DataTableModel extends CollectionModel {
  // TODO Добавить типы
  #filter = () => true;
  #sort = () => 0;

  setFilter(predicate) {
    this.#filter = predicate;

    this.dispatchEvent(new CustomEvent('filter'));

    return this;
  }

  getFilter() {
    return this.#filter;
  }

  setSort(compare) {
    this.#sort = compare;

    this.dispatchEvent(new CustomEvent('sort'));

    return this;
  }

  getSort() {
    return this.#sort;
  }


  list(predicate = this.getFilter(), compare = this.getSort()) {
    return this.listAll().filter(predicate).sort(compare);
  }
}
