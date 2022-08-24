import '../Modal/Modal.css';

function Modal({ active, setActive }) {
	return (
		<div
			className={active ? 'modal active' : 'modal'}
			onClick={() => setActive(false)}
		>
			<div
				className={active ? 'modal__content active' : 'modal__content'}
				onClick={(e) => e.stopPropagation()}
			>
				<div class='lds-dual-ring'></div>
			</div>
		</div>
	);
}
export default Modal;