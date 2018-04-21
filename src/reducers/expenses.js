
const expensesReducerDefaultState = [ ];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => {
                return id !== action.id;
            }) ;
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates,
                        selectedRemove
                    };
                } else {
                    return expense;
                }
            });
        case 'SET_EXPENSES':
            return action.expenses;
        // case 'MODAL_OPEN':
        //     return [
        //         ...state,
        //         action.confirmRemove
        //     ];
        // case 'MODAL_CLOSE':
        //     return [
        //         ...state,
        //         action.confirmRemove
        //     ];
        default:
            return state;
    }
};

export default expensesReducer;