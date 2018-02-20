import React, {Component} from 'react'
import List from '../../components/List'
import { Button } from 'react-bootstrap';
import {connect} from "react-redux";
import {getBookshelvesList} from "../../modules/selectors/bookshelves";
import * as bookshelvesActions from "../../modules/actions/bookshelves";
import {bindActionCreators} from "redux";
import {BOOK, BOOK_SHELVES} from "../../constants/entityNames";

export class BookshelvesList extends Component {

    componentDidMount() {
        this.props.actions.loadBookshelves();
    }

    deleteItem = (id) => {
        this.props.actions.deleteBookshelf(id);
    };


    render() {
        const {bookshelves} = this.props;
        return (
            <div>
                <List items={bookshelves} entityName={BOOK_SHELVES} linkTo={BOOK} deleteAction={this.deleteItem}/>,
                <Button className='btn-primary'>New Bookshelf</Button>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        bookshelves: getBookshelvesList(state)
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(bookshelvesActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookshelvesList);