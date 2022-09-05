import Enum from './enum.js';
import Filter from './filter.js';

/** @typedef {(item: MovieAdapter) => boolean} MoviePredicate */

export default class FilterPredicate extends Enum {

  /**
   * @type {MoviePredicate}
   */
  static ALL = () => true;

  /**
  * @type {MoviePredicate}
  */
  static SCHEDULED = (movie) => movie.meta[Filter.SCHEDULED];

  /**
  * @type {MoviePredicate}
  */
  static WATCHED = (movie) => movie.meta[Filter.WATCHED];

  /**
  * @type {MoviePredicate}
  */
  static FAVORITE = (movie) => movie.meta[Filter.FAVORITE];
}
