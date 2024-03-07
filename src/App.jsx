// Add components for displaying products, the cart (in a modal) and a checkout form in the modal
// fetch the meals data from the backend and show it on the screen
// allow users to add & remove products to / from cart
// Send ccaret dat along with user data (from form) to backend
// handle Loading and Error states.
import { useCallback, useRef } from 'react'
import { useFetch } from './hooks/useFetch'

import { fetchMeals } from './API'
import Header from './components/Header'
import Meals from './components/Meals'
import CartModal from './components/CartModal'

function App() {
	const cartDialog = useRef()

	function handleOpenCart() {
		cartDialog.current.showModal()
		console.log('Opening modal')
	}

	return (
		<div>
			<Header onOpenCart={handleOpenCart} />
			<Meals />
			<CartModal ref={cartDialog}>This is the Cart</CartModal>
		</div>
	)
}

export default App
