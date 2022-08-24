import ExpenseForm from './ExpenseForm'
import './AddExpense.css'

function AddExpense(props) {
    
	const saveDataFormHandler = (formData) => {
		const incertKeyFormData = {
			...formData,
			id: Math.random().toString(),
		}
		props.onSaveDataToArray(incertKeyFormData)
	}

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveData={saveDataFormHandler} />
		</div>
	)
}
export default AddExpense