import './view/film-detail-view.js';
import './view/user-rank-view.js';
import './view/navigation-view.js';
import './view/filters-view.js';


// import NewNavigationView from './view/navigation-view.js';
// import NewFilterView from './view/filters-view.js';
// import {render} from './render.js';
// const siteMainElement = document.querySelector('.main');
// render(new NewNavigationView(), siteMainElement);
// render(new NewFilterView(),siteMainElement);

// siteMainElement.append('film-navigation');

import FilmCollectionPresenter from './presenter/film-collection-presenter.js';

const filmCollectionPresenter = new FilmCollectionPresenter;

filmCollectionPresenter.init(document.querySelector('.films'));


