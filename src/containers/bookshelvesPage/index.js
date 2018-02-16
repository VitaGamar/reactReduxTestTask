import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as bookshelvesActions from '../../modules/actions/bookshelves';
import { bindActionCreators } from 'redux';
import {getBookshelvesList} from '../../modules/selectors/bookshelves';
import {BOOK_SHELVES, BOOK} from "../../constants/entityNames";
import List from '../../components/List';
import { Route, Switch } from 'react-router-dom';
import ViewBookshelf from './../ViewBookshelf';
import EditBookshelf from './../EditBookshelf';

export class BookshelvesPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.loadBookshelves();
    }

    render() {
        const { bookshelves } = this.props;
        return (
            <div className="container">
                <Switch>
                    <Route exact path="/:bookshelves?" render={() => <List items={bookshelves} entityName={BOOK_SHELVES} linkTo={BOOK} />} />
                    <Route path="/bookshelves/edit/:id" component={EditBookshelf} />
                    <Route path="/bookshelves/view/:id" component={ViewBookshelf} />
                </Switch>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        bookshelves: getBookshelvesList(state)
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(bookshelvesActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookshelvesPage);
