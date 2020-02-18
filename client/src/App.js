import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import Home from './components/pages/Home';
import ArticleInfo from './components/articles/ArticleInfo';
import ArticleAdd from './components/articles/ArticleAdd';
import ArticleEdit from './components/articles/ArticleEdit';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="container">
          <Main />
        </div>
      </Router>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <NavLink exact className="nav-link" activeClassName="active" to="/">
          Home
        </NavLink>
      </div>
    </nav>
  );
}

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/articles/new" component={ArticleAdd} />
      <Route exact path="/articles/:_id" component={ArticleInfo} />
      <Route exact path="/articles/:_id/edit" component={ArticleEdit} />
    </Switch>
  );
}

export default App;
