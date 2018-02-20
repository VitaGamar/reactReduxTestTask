import initialState from '../../stores/initialState'
import { getBookshelves } from "../../selectors/bookshelves";
import * as ActionTypes from '../../../constants/actions'
import { normalize } from 'normalizr';
import {bookshelf} from './../../schemas';
import {BOOK_SHELVES} from "../../../constants/entityNames";

const bookshelvesReducer = (state = getBookshelves(initialState), action) => {
    switch(action.type) {
        case `${ActionTypes.GET_BOOK_SHELVES}_${ActionTypes.HTTP_STATUS.SUCCESS}`:
            const normalizedData = normalize( {bookshelves: action.payload}, {bookshelves: [bookshelf]} );
            return { ids: normalizedData.result[BOOK_SHELVES], data: normalizedData.entities[BOOK_SHELVES] };

        case `${ActionTypes.UPDATE_BOOK_SHELF}_${ActionTypes.HTTP_STATUS.SUCCESS}`:
            return {
                ...state,
                data: { ...state.data, [action.payload.id]: action.payload }
            };

        case `${ActionTypes.DELETE_BOOK_SHELF}_${ActionTypes.HTTP_STATUS.SUCCESS}`:
            const {id} = action.payload;
            return {
                ids: state.ids.filter(elem => elem !== id),
                data: state.ids.reduce((acc, elem) => {
                     if(elem.id !== id){
                        return {...acc, elem};
                     }
                     return acc;
                }, {})
            };

        case `${ActionTypes.CREATE_BOOK_SHELF}_${ActionTypes.HTTP_STATUS.SUCCESS}`:
            return {
                ids: [...state.ids, action.payload.id],
                data: {...state.data, [action.payload.id]: action.payload.data}
            };

        default:
            return state;
    }
};



export default bookshelvesReducer;