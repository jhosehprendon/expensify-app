import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE Action creator
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description="", 
            note="", 
            amount=0, 
            createdAt=0
        } = expenseData;
        const expense = {description, note, amount, createdAt};

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        })
    };
};

// REMOVE_EXPENSE Action creator
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

// // MODAL OPEN

// export const modalOpen = (confirmRemove) => ({
//     type: 'MODAL_OPEN',
//     confirmRemove
// });

// export const startModalOpen = (confirmRemove) => {
//     return(dispatch) => {
//         const confirmRemove = true;
//         dispatch(modalOpen(confirmRemove))
//     }
// }


// // MODAL CLOSE

// export const modalClose = (confirmRemove) => ({
//     type: 'MODAL_CLOSE',
//     confirmRemove
// });

// export const startModalClose = (confirmRemove) => {
//     return(dispatch) => {
//         const confirmRemove = false;
//         dispatch(modalClose(confirmRemove))
//     }
// }


// EDIT_EXPENSE Action creator
export const editExpense = (id, updates, selectedRemove) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,

});

export const startEditExpense = (id, updates, selectedRemove) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

// SET EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setExpenses(expenses));
        });
    };
};

