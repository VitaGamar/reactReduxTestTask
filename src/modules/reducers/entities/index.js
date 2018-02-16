import { combineReducers } from 'redux'
import books from './books'
import bookshelves from './bookshelves'

export default combineReducers({
    books,
    bookshelves
})
