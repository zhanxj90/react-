import {createStore, combineReducers, applyMiddleware} from 'redux'
import teach from './reducer/teach'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    teach
})

const store = createStore(reducer, applyMiddleware(thunk));
export default store;