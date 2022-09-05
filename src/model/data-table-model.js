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
  }

  setSort(compare) {
    this.#sort = compare;
    this.dispatchEvent(new CustomEvent('sort'));
  }


  list(predicate = this.#filter, compare = this.#sort) {
    return this.listAll().filter(predicate).sort(compare);
  }
}
