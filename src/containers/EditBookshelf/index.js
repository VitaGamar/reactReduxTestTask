import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {getBookshelvesById} from "../../modules/selectors/bookshelves";
import { Form, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import {BOOK_SHELVES} from "../../constants/entityNames";
import {VIEW} from '../../constants/routes';

export class BookshelfEditForm extends Component {
    constructor(props) {
        super(props);
    }

    onSubmit=(event) => {
        event.preventDefault();
        console.log("sunmit");
    };

    render() {
        const {bookshelf} = this.props;
        return (
            <div className="container">
                <Form onSubmit={this.onSubmit}>
                    <FormGroup controlId="bookshelfTitle">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl placeholder="Enter title" type="text" />
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

function mapStateToProps(state, ownProps, st) {
    console.log(getBookshelvesById(state, ownProps.match.params.id));
    return {
        bookshelf: getBookshelvesById(state, ownProps.match.params.id)
    };
}


export default withRouter(connect(mapStateToProps)(BookshelfEditForm));

