import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense, startModalOpen, startModalClose } from '../actions/expenses';
import RemoveModal from './RemoveModal';

export class EditExpensePage extends React.Component {

    // state = { confirmRemove: undefined };
    constructor(props) {
        super(props)
        this.state = {
            confirmRemove: undefined
        }
    }

    onSubmit = (expense)=>{
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = ()=>{
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.setState(() => ({
            confirmRemove: false
        }));
        this.props.history.push('/');
    };

    onCloseModal = ()=>{
        this.setState(() => ({
            confirmRemove: false
        }));
    };

    onOpenModal = () => {
        this.setState(() => ({
            confirmRemove: true
        }));
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit expense</h1>
                        <Link className="back-link" to="/dashboard">
                            <p> &lt;  Go Back to Dashboard</p>
                        </Link>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onOpenModal}>Remove Expense</button>
                </div>

                <RemoveModal 
                    confirmRemove={this.state.confirmRemove}
                    onRemove={this.onRemove}
                    onCloseModal={this.onCloseModal}
                />
                
            </div>    
        );
    }
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);