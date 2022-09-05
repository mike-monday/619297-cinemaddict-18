import './view/popup-view.js';
import './view/rank-view.js';
import './view/navigation-view.js';
import './view/sort-view.js';
import Store from './store/store.js';


// import FilmCollectionModel from './model/film-collection-model.js';

// import NewNavigationView from './view/navigation-view.js';
// import NewFilterView from './view/filters-view.js';
// import {render} from './render.js';
// const siteMainElement = document.querySelector('.main');
// render(new NewNavigationView(), siteMainElement);
// render(new NewFilterView(),siteMainElement);

// siteMainElement.append('film-navigation');

import MovieAdapter from './adapter/movie-adapter.js';
import CommentAdapter from './adapter/comment-adapter.js';

import DataTableModel from './model/data-table-model.js';
import ApplicationModel from './model/application-model.js';
import CollectionModel from './model/collection-model.js';

import CollectionView from './view/collection-view.js';
import PopupView from './view/popup-view.js';


import PopupPresenter from './presenter/popup-presenter.js';
import ListPresenter from './presenter/list-presenter.js';


const BASE_URL = 'https://18.ecmascript.pages.academy/cinemaddict';
const MOVIES_URL = `${BASE_URL}/movies`;
const COMMENTS_URL = `${BASE_URL}/comments`;
const AUTH = 'Basic HJ787hhjjL789';


/** @type {Store<Movie>} */
const movieStore = new Store(MOVIES_URL, AUTH);

/** @type {Store<MovieComment>} */
const commentsStore = new Store(COMMENTS_URL, AUTH);


const movies = new DataTableModel(movieStore, (item) => new MovieAdapter(item));
const comments = new CollectionModel(commentsStore, (item) => new CommentAdapter(item));
const applicationModel = new ApplicationModel(movies, comments);

/** @type {CollectionView} */
const listView = document.querySelector(String(CollectionView));
const popupView = new PopupView();


applicationModel.ready().then(() => {
  new ListPresenter(applicationModel, listView);
  new PopupPresenter(applicationModel, popupView);
});

// const filmCollectionModel = new FilmCollectionModel;

