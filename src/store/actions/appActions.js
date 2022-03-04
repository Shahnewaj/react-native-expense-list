export const APP_SET_EXPENSE_CATEGORY = 'APP/APP_SET_EXPENSE_CATEGORY';
export const APP_SET_EXPENSE_ITEM = 'APP/APP_SET_EXPENSE_ITEM';


export function appSetExpenseCategory(payload) {
    return {
        type: APP_SET_EXPENSE_CATEGORY,
        payload
    }
}
export function appSetExpenseItem(payload) {
    return {
        type: APP_SET_EXPENSE_ITEM,
        payload
    }
}