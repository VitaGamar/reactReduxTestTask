import React  from 'react';
import BookshelvesList from '../BookshelvesList';
import { Route, Switch } from 'react-router-dom';
import ViewBookshelf from './../ViewBookshelf';
import EditBookshelf from './../EditBookshelf';

const BookshelvesPage = () => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/:bookshelves?" component={BookshelvesList} />
                <Route path="/bookshelves/edit/:id" component={EditBookshelf} />
                <Route path="/bookshelves/view/:id" component={ViewBookshelf} />
            </Switch>
        </div>
    );

};

export default BookshelvesPage;
