import FilmCollectionView from '../view/film-collection-view.js';
import FilmCardView from '../view/film-card-view.js';
export default class FilmCollectionPresenter {
  model = null;
  view = new FilmCollectionView().setTitleHidden();

  init(containerView) {
    containerView.append(
      this.view.addToList(...Array.from({length: 5}, this.createFilmCardView))
    );
  }

  createFilmCardView(/* film */) {
    return new FilmCardView();
    // .setTitle(film['film_info'].title);
  }
}

