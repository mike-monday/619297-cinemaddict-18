import BaseStore from './store.js';

export default class MovieStore extends BaseStore {
  /**
   * @return {Promise<Movie[]>}
   */
  get() {
    return this.query('/movies');
  }

  /**
   * @param {string} id
   * @param {MovieMeta} meta
   * @return {Promise<Movie>}
   */
  update(id, meta) {
    return this.query(`/movies/${id}`, {
      method: 'put',
      body: JSON.stringify(meta)
    });
  }
}
