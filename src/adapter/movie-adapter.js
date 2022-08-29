import MovieInfoAdapter from './movie-info-adapter.js';
import MovieMetaAdapter from './movie-meta-adapter.js';

export default class MovieAdapter {
  /**
   * @param {Movie} movie
   */
  constructor(movie) {
    this.id = movie.id;
    this.commentIds = movie.comments;
    this.info = new MovieInfoAdapter(movie.film_info);
    this.meta = new MovieMetaAdapter(movie.user_details);
  }
}
