import Presenter from './presenter.js';
import { formatYear } from '../format.js';
import { formatDuration } from '../format.js';
import { setContentRating } from '../util.js';

/**
 * @extends {Presenter<ApplicationModel, PopupView>}
 */
export default class PopupPresenter extends Presenter {
  /**
   * @param  {[model: ApplicationModel, view: PopupView]} init
   */
  constructor(...init) {
    super(...init);

    document.addEventListener('card-click', this.onCardClick.bind(this));
  }

  onCardClick(event) {
    console.log(event.target, event.detail);

    const movie = this.model.movies.findById(event.detail);
    console.log(movie);
    const { info } = movie;

    this.view
      .setTitle(info.title)
      .setDescription(info.description)
      .setRating(info.rating)
      .setGenre(...info.genres)
      .setPoster(info.posterUrl)
      .setSummary({
        director: info.director,
        writers: info.writers,
        actors: info.actors,
        release: formatYear(info.release.date),
        runtime: formatDuration(info.duration),
        country: info.release.country,
        rating: setContentRating(info.contentRating)
      })

      .open();

  }

}
