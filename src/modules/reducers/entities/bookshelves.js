
import initialState from '../../stores/initialState'
import { getBookshelves } from "../../selectors/bookshelves";
import * as ActionTypes from '../../../constants/actions'
import {BOOK_SHELVES} from "../../../constants/entityNames";

const bookshelvesReducer = (state = getBookshelves(initialState), action) => {
    console.log("bbb", action);
    switch(action.type) {
        case `${ActionTypes.GET_BOOK_SHELVES}_${ActionTypes.HTTP_STATUS.SUCCESS}`:

            const data = action.payload.reduce((acc, elem) => { acc[elem.id] = elem; return acc; }, {});
            const ids = Object.keys(data);
            console.log("aaabb", action, data);
            return { ids, data };
        default:
            return state;
    }
};

export default bookshelvesReducer;
