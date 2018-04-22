import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal, expenseCountNoFilter }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  const expenseCountNoFilterText = expenseCountNoFilter === 0 ? '' : expenseCountNoFilter === 1 ? expenseCountNoFilter + ' expense is hidden, reset dates to view all' : expenseCountNoFilter + ' expenses are hidden, reset dates to view all'
  
  return (
    <div className="page-header">
      <div className="content-container"> 
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
        <p>{expenseCountNoFilterText}</p>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>  
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    expenseCountNoFilter: state.expenses.length - visibleExpenses.length 
  };
};

export default connect(mapStateToProps)(ExpensesSummary);