import { createSelector } from 'reselect'

const getEntities = (state) => state.entities;

export const getBookshelves = createSelector( getEntities, entities => entities.bookshelves );

export const getBookshelvesById = (state, id) => getBookshelves(state).data[id];

export const getBookshelvesList = (state) => {
    const bookshelves = getBookshelves(state);
    return bookshelves.ids.reduce((acc, id) => {
        acc.push(bookshelves.data[id]);
        return acc;
    }, []);
};
