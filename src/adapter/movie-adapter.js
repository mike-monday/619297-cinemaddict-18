import Adapter from './adapter.js';
import MovieInfoAdapter from './movie-info-adapter.js';
import MovieMetaAdapter from './movie-meta-adapter.js';

export default class MovieAdapter extends Adapter {
  /**
   * @param {Movie} init
   */
  constructor(init) {
    super();

    this.id = init.id;
    this.commentIds = init.comments;
    this.info = new MovieInfoAdapter(init.film_info);
    this.meta = new MovieMetaAdapter(init.user_details);
  }
}
