import './view/detail-view.js';
import './view/rank-view.js';
import './view/navigation-view.js';
import './view/filters-view.js';
import Store from './store/store.js';


// import FilmCollectionModel from './model/film-collection-model.js';

// import NewNavigationView from './view/navigation-view.js';
// import NewFilterView from './view/filters-view.js';
// import {render} from './render.js';
// const siteMainElement = document.querySelector('.main');
// render(new NewNavigationView(), siteMainElement);
// render(new NewFilterView(),siteMainElement);

// siteMainElement.append('film-navigation');

import ListPresenter from './presenter/list-presenter.js';
import CollectionModel from './model/collection-model.js';
import MovieAdapter from './adapter/movie-adapter.js';
import CommentAdapter from './adapter/comment-adapter.js';
import PopupPresenter from './presenter/popup-presenter.js';

const BASE_URL = 'https://18.ecmascript.pages.academy/cinemaddict';
const MOVIES_URL = `${BASE_URL}/movies`;
const COMMENTS_URL = `${BASE_URL}/comments`;
const CREDENTIALS = 'Basic HJ787hhjjL789';

/** @type {Store<Movie>} */
const movieStore = new Store(MOVIES_URL, CREDENTIALS);

/** @type {Store<MovieComment>} */
const commentsStore = new Store(COMMENTS_URL, CREDENTIALS);

const moviesModel = new CollectionModel(movieStore, (item) => new MovieAdapter(item));

const commentsModel = new CollectionModel(commentsStore, (item) => new CommentAdapter(item));

moviesModel.ready().then(() => {
  const listPresenter = new ListPresenter(moviesModel, commentsModel);

  listPresenter.init(document.querySelector('.films'));

  new PopupPresenter(moviesModel, commentsModel);
});

// const filmCollectionModel = new FilmCollectionModel;

