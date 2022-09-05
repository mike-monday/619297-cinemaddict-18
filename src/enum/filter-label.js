import Enum from './enum.js';

export default class FilterLabel extends Enum {
  static ALL = 'All movies';
  static SCHEDULED = 'Watchlist';
  static WATCHED = 'History';
  static FAVORITE = 'Favorites';
}
