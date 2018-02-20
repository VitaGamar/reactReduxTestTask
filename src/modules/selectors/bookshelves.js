import { createSelector } from 'reselect';

const getEntities = (state) => state.entities;

export const getBookshelves = createSelector( getEntities, entities => entities.bookshelves );

export const getBookshelvesIds = (state, id) => getBookshelves(state).ids;
export const getBookshelvesData = (state, id) => getBookshelves(state).data;

export const getBookshelvesList = (state) => {
    const bookshelves = getBookshelves(state);
    return bookshelves.ids.reduce((acc, id) => {
        acc.push(bookshelves.data[id]);
        return acc;
    }, []);
};

export const getBookshelfById = (state, id) => getBookshelves(state).data[id];
