import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
	console.log(props.date);
	return (
		<div className='expense-item'>
			<ExpenseDate date={new Date(props.date)} />
			<h2>{props.text}</h2>
			<div className='expens-item__description'>
				<div className='expense-item__price'>{props.amount}$</div>
			</div>
		</div>
	);
}

export default ExpenseItem;