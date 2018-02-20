import * as ENTITY_NAME from './entityNames'

export const RESPONSE_STATUS = {
    SUCCESS: 1,
    FAILURE: 0
};

const HTTP_METHOD = {
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
    POST: 'PATCH'
};

export const HTTP_STATUS = {
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
    REQUEST: 'REQUEST',
};

const createCRUDEvent = (entityName, httpMethod) => `@entities/${httpMethod}-${entityName}`;

export const GET_BOOK = createCRUDEvent(ENTITY_NAME.BOOK, HTTP_METHOD.GET);
export const CREATE_BOOK = createCRUDEvent(ENTITY_NAME.BOOK, HTTP_METHOD.POST);
export const UPDATE_BOOK = createCRUDEvent(ENTITY_NAME.BOOK, HTTP_METHOD.PUT);
export const DELETE_BOOK = createCRUDEvent(ENTITY_NAME.BOOK, HTTP_METHOD.DELETE);


export const GET_BOOK_SHELVES = createCRUDEvent(ENTITY_NAME.BOOK_SHELVES, HTTP_METHOD.GET);
export const CREATE_BOOK_SHELF = createCRUDEvent(ENTITY_NAME.BOOK_SHELVES, HTTP_METHOD.POST);
export const UPDATE_BOOK_SHELF = createCRUDEvent(ENTITY_NAME.BOOK_SHELVES, HTTP_METHOD.PUT);
export const DELETE_BOOK_SHELF = createCRUDEvent(ENTITY_NAME.BOOK_SHELVES, HTTP_METHOD.DELETE);

export const httpActionsCreator = (type) => (status) => `${type}_${status}`;