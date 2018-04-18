import React from 'react';
import ExpenseForm from './ExpenseForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add expense</h1>
                        <Link className="back-link" to="/dashboard">
                            <p>&lt;  Go Back to Dashboard</p>
                        </Link>
                    </div>
                </div>

                <div className="content-container">
                    <ExpenseForm 
                        onSubmit = {this.onSubmit}
                    />
                </div>
            </div>  
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    };
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage);