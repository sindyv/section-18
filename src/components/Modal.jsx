import { forwardRef } from 'react'
import { createPortal } from 'react-dom'

const modalDiv = document.getElementById('modal')

const Modal = forwardRef(function CartModal({ children }, ref) {
	return createPortal(
		<dialog className='modal' ref={ref}>
			{children}
		</dialog>,
		modalDiv
	)
})

export default Modal
