// Add components for displaying products, the cart (in a modal) and a checkout form in the modal
// fetch the meals data from the backend and show it on the screen
// allow users to add & remove products to / from cart
// Send ccaret dat along with user data (from form) to backend
// handle Loading and Error states.

import Header from "./components/Header"
import Meals from "./components/Meals"
function App() {
	return (
		<div>
			<Header />
			<Meals />
		</div>
	)
}

export default App
