import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	// const [enteredData, setEnteredData] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// });

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		// setEnteredData((prevState) => {
		//     return { ...prevState, enteredTitle: event.target.value }
		// })
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault(); //prevents JS automatic request to server resulting in a reload
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						onChange={titleChangeHandler}
						value={enteredTitle}
						type="text"
					></input>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						onChange={amountChangeHandler}
						value={enteredAmount}
						type="number"
						min="0.01"
						step="0.01"
					></input>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						onChange={dateChangeHandler}
						value={enteredDate}
						type="date"
						min="2019-01-01"
						max="2022-12-31"
					></input>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
