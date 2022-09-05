import Model from './model.js';

export default class ApplicationModel extends Model {

  /**
   * @param {DataTableModel<Movie, MovieAdapter>} movies
   * @param {CollectionModel<MovieComment, CommentAdapter>} comments
   */
  constructor(movies, comments) {
    super();

    this.movies = movies;
    this.comments = comments;
  }

  /**
   * @override
   */
  ready() {
    return this.movies.ready();
  }
}
