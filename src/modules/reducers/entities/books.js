import * as actionType from '../../../constants/actions';
import initialState from '../../stores/initialState'
import { getBooks } from "../../selectors/books";

const booksReducer = (state = getBooks(initialState), action) => {
    return state;
};

export default booksReducer;
