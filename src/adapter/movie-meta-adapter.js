export default class MovieMetaAdapter {
  /**
   * @param {MovieMeta} meta
   */
  constructor(meta) {
    this.scheduled = meta.watchlist;
    this.watched = meta.already_watched;
    this.watchDate = meta.watching_date;
    this.favorite = meta.favorite;
  }

  /**
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
