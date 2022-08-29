import Presenter from './presenter.js';
import PopupView from '../view/detail-view.js';

export default class PopupPresenter extends Presenter {
  constructor(moviesModel, commentsModel) {
    super();

    this.moviesModel = moviesModel;
    this.commentsModel = commentsModel;

    this.popupView = new PopupView();
    document.addEventListener('card-click', this.handleCardClick.bind(this));
  }

  handleCardClick(event) {
    // console.log(event.target, event.detail);

    const movie = this.moviesModel.find((item) => item.id === event.detail);
    // console.log(movie);
    const { info } = movie;

    this.popupView
      .setTitle(info.title)
      .setDescription(info.description)
      .setRating(info.rating)
      .setGenre(...info.genres)
      .setPoster(info.posterUrl)
      .setSummary({
        director: '',
        writers: '',
        actors: '',
        release: '',
        runtime: '',
        country: ''
      })

      .open();

  }

}
