import MovieReleaseAdapter from './movie-release-adapter.js';

export default class MovieInfoAdapter {
  /**
   * @param {MovieInfo} info
   */
  constructor(info) {
    this.title = info.title;
    this.altTitle = info.alternative_title;
    this.rating = info.total_rating;
    this.posterUrl = info.poster;
    this.contentRating = info.age_rating;
    this.director = info.director;
    this.writers = info.writers;
    this.actors = info.actors;
    this.release = new MovieReleaseAdapter(info.release);
    this.duration = info.runtime;
    this.genres = info.genre;
    this.description = info.description;
  }
}
