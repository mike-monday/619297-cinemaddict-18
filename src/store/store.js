import BaseStoreQueryError from './base-store-query-error.js';

/**
 * @template Record
 */
export default class Store {
  #baseUrl;
  #credentials;

  /**
   * @param {string} baseUrl
   * @param {string} credentials
   */
  constructor(baseUrl, credentials) {
    this.#baseUrl = baseUrl;
    this.#credentials = credentials;
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
      'authorization': this.#credentials,
      ...options.headers
    };

    return fetch(url, {...options, headers}).then((response) => {
      if (!response.ok) {
        throw new BaseStoreQueryError(response);
      }
      return response.json();
    });
  }

  /**
   * @return {Promise<Record[]>}
   */
  list() {
    return this.query('/', {
      method: 'get'
    });
  }
}
