import Adapter from './adapter.js';
export default class MovieReleaseAdapter extends Adapter {
  /**
   * @param {MovieRelease} init
   */
  constructor(init) {
    super();

    this.date = init.date;
    this.country = init.release_country;
  }
}
