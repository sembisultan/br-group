import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux'

import store from './app/store'
import './index.css';
import NewsList from './pages/NewsList';
import NewsPage from './pages/NewsPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <div className="p-5 m-auto">
          <Switch>
            <Route path="/news/:newsId">
              <NewsPage />
            </Route>
            <Route path="/">
              <NewsList />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>
);
