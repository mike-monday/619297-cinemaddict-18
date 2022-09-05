/** @typedef {import('../adapter/movie-adapter').default} MovieAdapter */
import CardView from '../view/card-view.js';
import { formatYear } from '../format.js';
import { formatDuration } from '../format.js';
import { formatCommentsCount } from '../util.js';
import { truncateText } from '../util.js';
import { setGenre } from '../util.js';
import Presenter from './presenter.js';

/**
 * @extends {Presenter<ApplicationModel, CollectionView>}
 */
export default class ListPresenter extends Presenter {
  /**
   * @param  {[model: ApplicationModel, view: CollectionView]} init
   */
  constructor(...init) {
    super(...init);

    // console.log(this.view);

    this.updateView();
    this.model.movies.addEventListener(['update', 'filter', 'sort'], this.updateView.bind(this));
  }

  updateView() {
    const films = this.model.movies.list();
    const cardViews = films.map(this.createCardView, this);

    this.view.setCards(...cardViews);
  }

  /**
   * @param {MovieAdapter} movie
   */
  createCardView(movie) {
    const {info, meta, commentIds} = movie;

    return new CardView(movie.id, {
      title: info.title,
      buttonStates: [meta.scheduled, meta.watched, meta.favorite],
      genre: setGenre(info.genres),
      rating: info.rating,
      year: formatYear(info.release.date),
      duration: formatDuration(info.duration),
      summary: truncateText(info.description),
      posterUrl: info.posterUrl,
      commentsCount: formatCommentsCount(commentIds.length),
    });
  }
}
