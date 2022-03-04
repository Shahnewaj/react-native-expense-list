import { handleActions } from 'redux-actions';
import { APP_SET_EXPENSE_CATEGORY, APP_SET_EXPENSE_ITEM } from '../actions';

const initialState = {
    loading: false,
    expenseCategories: [],
    expenses: [],
};


export default handleActions(
    {
        [APP_SET_EXPENSE_CATEGORY]: (state, action) => ({
            ...state,
            expenseCategories: [...state.expenseCategories, action.payload]
        }),
        [APP_SET_EXPENSE_ITEM]: (state, action) => ({
            ...state,
            expenses: [...state.expenses, action.payload]
        }),
    },
    initialState,
);


