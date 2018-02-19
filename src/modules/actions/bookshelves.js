import * as ActionTypes from '../../constants/actions'
import {BOOK_SHELVES} from "../../constants/entityNames";
import api from './../../api'

export const loadBookshelves = () => {
    return function(dispatch){
        const actionMaker = ActionTypes.httpActionsCreator(ActionTypes.GET_BOOK_SHELVES);
        dispatch({type: actionMaker(ActionTypes.HTTP_STATUS.REQUEST)});
        return api.getAll(BOOK_SHELVES).then(response => {
            dispatch({
                type: actionMaker(ActionTypes.HTTP_STATUS.SUCCESS),
                payload: response.data});
        }, error => {
            dispatch({
                type: actionMaker(ActionTypes.HTTP_STATUS.SUCCESS),
                payload: error});
        });
    }
};

export const updateBookshelf = (id, data) => {
    return function(dispatch){
        const actionMaker = ActionTypes.httpActionsCreator(ActionTypes.UPDATE_BOOK_SHELF);

        dispatch({type: actionMaker(ActionTypes.HTTP_STATUS.REQUEST)});

        return api.updatePUT(BOOK_SHELVES, id, data)
            .then(
                response => {
                    dispatch({
                        type: actionMaker(ActionTypes.HTTP_STATUS.SUCCESS),
                        payload: response.data});
                }, error => {
                    dispatch({
                        type: actionMaker(ActionTypes.HTTP_STATUS.FAILURE),
                        payload: error});
                }
            );
    }
};

export const createBookshelf = (id, data) => {
    return function(dispatch){
        const actionMaker = ActionTypes.httpActionsCreator(ActionTypes.CREATE_BOOK_SHELF);

        dispatch({type: actionMaker(ActionTypes.HTTP_STATUS.REQUEST)});

        return api.create(BOOK_SHELVES, data)
            .then(
                response => {
                    dispatch({
                        type: actionMaker(ActionTypes.HTTP_STATUS.SUCCESS),
                        payload: response.data});
                }, error => {
                    dispatch({
                        type: actionMaker(ActionTypes.HTTP_STATUS.FAILURE),
                        payload: error});
                }
            );
    }
};

export const deleteBookshelf = (id) => {
    return function(dispatch){
        const actionMaker = ActionTypes.httpActionsCreator(ActionTypes.DELETE_BOOK_SHELF);

        dispatch({type: actionMaker(ActionTypes.HTTP_STATUS.REQUEST)});

        return api.deleteById(BOOK_SHELVES, id)
            .then(
                response => {
                    dispatch({
                        type: actionMaker(ActionTypes.HTTP_STATUS.SUCCESS),
                        payload: response.data});
                }, error => {
                    dispatch({
                        type: actionMaker(ActionTypes.HTTP_STATUS.FAILURE),
                        payload: error});
                }
            );
    }
};