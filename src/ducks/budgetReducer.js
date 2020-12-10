import axios from 'axios'


//* Initial State
const initialState = {
    purchases: [],
    budgetLimit: null,
    loading: false
}

//* Action Constants
const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA';
const ADD_PURCHASE = 'ADD_PURCHASE';
const REMOVE_PURCHASE = 'REMOVE_PURCHASE';

//* Action Creators
export const requestBudgetData = () => {
    let data = axios.get('/api/budget-data').then(res => res.data)
    return {
        type: REQUEST_BUDGET_DATA,
        payload: data
    }
}

export function addPurchase(price, description, category) {
    const res = axios.post('/api/budget-data/purchase', { price, description, category })
    return {
        type: ADD_PURCHASE,
        payload: res
    }
}

export function removePurchase(id) {
    const res = axios.delete(`/api/budget-data/purchase/${id}`)

    return {
        type: REMOVE_PURCHASE,
        payload: res
    }
}


//* Reducer Function
export default function budgetReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_BUDGET_DATA + '_PENDING':
            return { ...state, loading: true }
        case REQUEST_BUDGET_DATA + '_FULFILLED':
            return { ...state, ...action.payload, loading: false }

        case ADD_PURCHASE + '_PENDING':
            return { ...state, loading: true }
        case ADD_PURCHASE + '_FULFILLED':
            return { ...state, ...action.payload, loading: false }

        case REMOVE_PURCHASE + '_PENDING':
            return { ...state, loading: true }
        case REMOVE_PURCHASE + '_FULFILLED':
            return { ...state, ...action.payload, loading: false }
        default:
            return state;
    }
}