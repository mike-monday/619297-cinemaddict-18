export default class BaseStoreQueryError extends Error {
  /**
   * @param {Response} response
   */
  constructor(response) {
    super(`${response.status}. ${response.statusText}`);

    this.response = response;
  }
}
