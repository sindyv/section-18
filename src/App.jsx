// Add components for displaying products, the cart (in a modal) and a checkout form in the modal
// fetch the meals data from the backend and show it on the screen
// allow users to add & remove products to / from cart
// Send ccaret dat along with user data (from form) to backend
// handle Loading and Error states.
import { useRef, useState } from 'react'

import CartContextProvider from './store/cart-context'

import Header from './components/Header'
import Meals from './components/Meals'
import Modal from './components/Modal'
import Cart from './components/Cart'

function App() {
	const cartDialog = useRef()

	function handleOpenCart() {
		cartDialog.current.showModal()
	}

	return (
		<div>
			<CartContextProvider>
				<Header onOpenCart={handleOpenCart} />
				<Meals />
				<Modal ref={cartDialog}>
					<Cart />
				</Modal>
			</CartContextProvider>
		</div>
	)
}

export default App
