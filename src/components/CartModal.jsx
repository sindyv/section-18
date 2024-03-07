import { forwardRef } from 'react'
import { createPortal } from 'react-dom'

const modalDiv = document.getElementById('modal')

const CartModal = forwardRef(function CartModal({ children }, ref) {
	return createPortal(
		<dialog className='modal' ref={ref}>
			{children}
			<form method='dialog'>
				<button>Close</button>
			</form>
		</dialog>,
		modalDiv
	)
})

export default CartModal
