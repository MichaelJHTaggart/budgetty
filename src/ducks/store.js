import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import budgetReducer from './budgetReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
})

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(promiseMiddleware))
);