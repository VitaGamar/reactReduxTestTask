import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import entities from './entities'
import requestData from './requestData';

export default combineReducers({
    router: routerReducer,
    entities: entities,
    requestData
})
