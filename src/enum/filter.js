import Enum from './enum.js';

export default class Filter extends Enum {
  static ALL = 'all';
  static SCHEDULED = 'scheduled';
  static WATCHED = 'watched';
  static FAVORITE = 'favorite';
}
