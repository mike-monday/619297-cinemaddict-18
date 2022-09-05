import StoreError from './store-error.js';

/**
 * @template Item
 */
export default class Store {
  #baseUrl;
  #auth;

  /**
   * @param {string} baseUrl
   * @param {string} auth
   */
  constructor(baseUrl, auth) {
    this.#baseUrl = baseUrl;
    this.#auth = auth;
  }

  /**
   * Отправит запрос
   * @param {string} path
   * @param {Object} options
   */
  query(path, options = {}) {
    const url = this.#baseUrl + path;
    const headers = {
      'content-type': 'application/json',
      'authorization': this.#auth,
      ...options.headers
    };

    return fetch(url, {...options, headers}).then((response) => {
      if (!response.ok) {
        throw new StoreError(response);
      }
      return response.json();
    });
  }

  /**
   * @return {Promise<Item[]>}
   */
  list() {
    return this.query('/', {
      method: 'get',
      cache: 'force-cache' // TODO убрать force-cache
    });
  }
  // TODO add, update, remove
}
