import * as ActionTypes from '../../constants/actions'
import {BOOK_SHELVES} from "../../constants/entityNames";
import api from './../../api'

export const loadBookshelves = () => {
    return function(dispatch){
        const actionMaker = ActionTypes.httpActionsCreator;
        dispatch({type: actionMaker(ActionTypes.GET_BOOK_SHELVES, ActionTypes.HTTP_STATUS.REQUEST)});
        return api.getAll(BOOK_SHELVES).then(response => {
            dispatch({
                type: actionMaker(ActionTypes.GET_BOOK_SHELVES, ActionTypes.HTTP_STATUS.SUCCESS),
                payload: response.data});
        }, error => {
            dispatch({
                type: actionMaker(ActionTypes.GET_BOOK_SHELVES, ActionTypes.HTTP_STATUS.SUCCESS),
                payload: error});
        });
    }
};