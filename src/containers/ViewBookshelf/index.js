import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {getBookshelfById} from "../../modules/selectors/bookshelves";
import { FormGroup, Form, ControlLabel, FormControl, ButtonToolbar } from 'react-bootstrap'
import {BOOK_SHELVES} from "../../constants/entityNames";
import {EDIT} from '../../constants/routes';
import PropTypes from "prop-types";

export class BookshelfViewForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {bookshelf} = this.props;
        return (
            <div className="container">
                <Form>
                    <FormGroup>
                        <ControlLabel>Title</ControlLabel>
                        <FormControl.Static>{bookshelf.title}</FormControl.Static>
                    </FormGroup>
                </Form>
                <ButtonToolbar>
                    <Link className="btn btn-default" to={`/${BOOK_SHELVES}/${EDIT}/${bookshelf.id}`}>Edit</Link>
                    { " | " }
                    <Link className="btn btn-default" to={`/${BOOK_SHELVES}`}>Back</Link>
                </ButtonToolbar>
            </div>
        );
    }
}

BookshelfViewForm.propTypes = {
    bookshelf: PropTypes.object.isRequired
};

BookshelfViewForm.defaultProps = {
    bookshelf: {}
};

function mapStateToProps(state, ownProps) {
    return {
        bookshelf: getBookshelfById(state, ownProps.match.params.id)
    };
}


export default withRouter(connect(mapStateToProps)(BookshelfViewForm));

