import Enum from './enum.js';

export default class FilterPlaceholder extends Enum {
  static ALL = 'There are no movies in our database';
  static SCHEDULED = 'There are no movies to watch now';
  static WATCHED = 'There are no watched movies now';
  static FAVORITE = 'There are no favorite movies now';
}
