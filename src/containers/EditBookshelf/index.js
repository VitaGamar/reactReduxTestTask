import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getBookshelvesById} from "../../modules/selectors/bookshelves";
import { Form, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import {BOOK_SHELVES} from "../../constants/entityNames";
import {VIEW} from '../../constants/routes';
import * as bookshelvesActions from "../../modules/actions/bookshelves";
import {bindActionCreators} from "redux";

export class BookshelfEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
           title: this.props.bookshelf.title || ""
        };
    }

    componentWillReceiveProps(props) {
        if (props.bookshelf.title !== this.props.bookshelf.title) {
            this.setState({ title: props.bookshelf.title });
        }
    }

    onSubmit=(event) => {
        event.preventDefault();
        const id = this.props.bookshelf.id;
        this.props.actions.updateBookshelves(id, { title: this.state.title });
        console.log("submit");
    };

     onChange = (event) => {
        this.setState({title: event.target.value});
     };

    render() {
        console.log("render");
        const {bookshelf} = this.props;
        return (
            <div className="container">
                <Form onSubmit={this.onSubmit}>
                    <FormGroup controlId="bookshelfTitle">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl placeholder="Enter title" onChange={this.onChange} value={this.state.title} type="text" />
                    </FormGroup>
                    <Button className="btn btn-primary centerButton" type="submit">Update bookshelf</Button>
                </Form>
                <Link className="btn btn-default" to={`/${BOOK_SHELVES}/${VIEW}/${bookshelf.id}`}>Show</Link>
                {" | "}
                <Link className="btn btn-default" to={`/${BOOK_SHELVES}`}>Back</Link>
            </div>

        );
    }
}

BookshelfEditForm.PropTypes = {
  bookshelf: PropTypes.object.isRequired
};

BookshelfEditForm.defaultProps = {
    bookshelf: {}
};

function mapStateToProps(state, ownProps) {
    return {
        bookshelf: getBookshelvesById(state, ownProps.match.params.id)
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(bookshelvesActions, dispatch) };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookshelfEditForm));

