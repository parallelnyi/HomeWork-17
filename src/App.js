import { useEffect, useState } from 'react';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Modal from './components/Modal/Modal';
import AddExpense from './components/NewExpense/AddExpense';

function App() {
	const [expensesData, setExpensesData] = useState([]);
	const [active, setActive] = useState(false);

	const saveDatatoArrayHandler = async (formData) => {
		await fetch(
			'https://homework-17-default-rtdb.firebaseio.com/homework.json',
			{
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-type': 'application/json',
				},
			},
		);

		setActive(true);
		getDataFromBackend();
	};

	async function getDataFromBackend() {
		const response = await fetch(
			'https://homework-17-default-rtdb.firebaseio.com/homework.json',
		);
		const data = await response.json();
		const loadedData = [];
		for (const key in data) {
			loadedData.push({
				amount: data[key].amount,
				id: key,
				title: data[key].title,
				date: data[key].date,
			});
		}
		setExpensesData(loadedData);

		setActive(false);
	}

	useEffect(() => {
		getDataFromBackend();
	}, []);

	return (
		<div className='app-main-block'>
			<AddExpense onSaveDataToArray={saveDatatoArrayHandler} />
			<Modal setActive={setActive} active={active} />
			{expensesData.map((element) => {
				return (
					<ExpenseItem
						key={element.id}
						date={element.date}
						text={element.title}
						amount={element.amount}
					/>
				);
			})}
		</div>
	);
}

export default App;