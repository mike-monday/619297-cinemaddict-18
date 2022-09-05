import Adapter from './adapter.js';
import MovieReleaseAdapter from './movie-release-adapter.js';

export default class MovieInfoAdapter extends Adapter {
  /**
   * @param {MovieInfo} init
   */
  constructor(init) {
    super();

    this.title = init.title;
    this.altTitle = init.alternative_title;
    this.rating = init.total_rating;
    this.posterUrl = init.poster;
    this.contentRating = init.age_rating;
    this.director = init.director;
    this.writers = init.writers;
    this.actors = init.actors;
    this.release = new MovieReleaseAdapter(init.release);
    this.duration = init.runtime;
    this.genres = init.genre;
    this.description = init.description;
  }
}
