import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import BookshelvesPage from './../bookshelvesPage'
import BooksPage from './../booksPage'
import './../../styles/app.css'

const App = () => (
  <div>
    <header>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to='/'>Bookshelves</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to='/books'>Books</NavLink>
            </li>
        </ul>
    </header>

    <main>
        <Route exact path="/" component={BookshelvesPage} />
        <Route path="/bookshelves" component={BookshelvesPage} />
        <Route exact path="/books" component={BooksPage} />
    </main>
  </div>
);

export default App
