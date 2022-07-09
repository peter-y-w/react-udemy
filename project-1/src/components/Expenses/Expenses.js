import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	const [selectedFilterYear, setSelectedFilterYear] = useState('2020');
	const filterYearSelectHandler = (filterYearData) => {
		setSelectedFilterYear(filterYearData);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={selectedFilterYear}
				onFilterYearSelect={filterYearSelectHandler}
			/>
			<ExpenseItem
				date={props.items[0].date}
				title={props.items[0].title}
				amount={props.items[0].amount}
			></ExpenseItem>
			<ExpenseItem
				date={props.items[1].date}
				title={props.items[1].title}
				amount={props.items[1].amount}
			></ExpenseItem>
			<ExpenseItem
				date={props.items[2].date}
				title={props.items[2].title}
				amount={props.items[2].amount}
			></ExpenseItem>
			<ExpenseItem
				date={props.items[3].date}
				title={props.items[3].title}
				amount={props.items[3].amount}
			></ExpenseItem>
		</Card>
	);
};

export default Expenses;
