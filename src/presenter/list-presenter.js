/** @typedef {import('../adapter/movie-adapter').default} MovieAdapter */
import FilmCollectionView from '../view/collection-view.js';
import CardView from '../view/card-view.js';
import { formatYear } from '../format.js';
import { formatDuration } from '../format.js';
import { formatCommentsCount } from '../util.js';
import { truncateText } from '../util.js';
import { setGenre } from '../util.js';
import Presenter from './presenter.js';

export default class ListPresenter extends Presenter {
  constructor(model) {
    super();

    this.model = model;
    this.view = new FilmCollectionView().setTitleHidden();
  }

  init(containerView) {
    const films = this.model.list();
    const cardViews = films.map(this.createCardView, this);

    containerView.append(
      this.view.setCards(...cardViews)
      // this.view.addToList(...this.model.get().map(this.createFilmCardView))
      // this.view.addToList(...Array.from({length: 5}, this.createFilmCardView))
    );
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
