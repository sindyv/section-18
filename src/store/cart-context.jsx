import { createContext, useState } from 'react'

export const CartContext = createContext({ cart: [], updateCart: () => {} })

function CartContextProvider({ children }) {
	const [cart, setCart] = useState([])

	function updateCart(meal) {
		setCart((prev) => {
			let newArray = [...prev]

			const index = newArray.findIndex((item) => {
				return item.id === meal.id
			})

			if (index === -1) {
				meal.count = 1
				return [...prev, meal]
			} else {
				newArray[index].count += 1
			}
		})
	}

	const CartCtx = { cart, updateCart }

	return (
		<CartContext.Provider value={CartCtx}>{children}</CartContext.Provider>
	)
}

export default CartContextProvider
