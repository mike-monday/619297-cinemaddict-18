import Adapter from './adapter.js';
export default class MovieMetaAdapter extends Adapter {
  /**
   * @param {MovieMeta} init
   */
  constructor(init) {
    super();

    this.scheduled = init.watchlist;
    this.watched = init.already_watched;
    this.watchDate = init.watching_date;
    this.favorite = init.favorite;
  }

  /**
   * @override
   * @return {MovieMeta}
   */
  toJSON() {
    return {
      'watchlist': this.scheduled,
      'already_watched': this.watched,
      'watching_date': this.watchDate,
      'favorite': this.favorite
    };
  }
}
