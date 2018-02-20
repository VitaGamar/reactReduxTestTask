import * as ActionTypes from '../../constants/actions'
import {BOOK_SHELVES} from "../../constants/entityNames";
import api from './../../api';
import {makeRequest} from "./common";

export const loadBookshelves = () => {
    return makeRequest.bind(
        null,
        ActionTypes.GET_BOOK_SHELVES,
        api.getAll.bind(null, BOOK_SHELVES)
    );
};

export const updateBookshelf = (id, data) => {
    return makeRequest.bind(
        null,
        ActionTypes.UPDATE_BOOK_SHELF,
        api.updatePUT.bind(null, BOOK_SHELVES, id, data)
    );
};


export const createBookshelf = (data) => {
    return makeRequest.bind(
        null,
        ActionTypes.CREATE_BOOK_SHELF,
        api.create.bind(null, BOOK_SHELVES, data)
    );
};

export const deleteBookshelf = (id) => {
    return makeRequest.bind(
        null,
        ActionTypes.DELETE_BOOK_SHELF,
        api.deleteById.bind(null, BOOK_SHELVES, id)
    );
};