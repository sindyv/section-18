import { useContext } from 'react'
import { CartContext } from '../store/cart-context'

import CartItem from './CartItem'

function Cart() {
	const CartCtx = useContext(CartContext)

	return (
		<div className='cart'>
			<h2>Your Cart</h2>
			<ul>
				{CartCtx.cart.length > 0 ? (
					CartCtx.cart.map((item) => {
						return <CartItem key={item.id} item={item} />
					})
				) : (
					<p>No items added yet...</p>
				)}
			</ul>
			<div className='modal-action'>
				<form method='dialog'>
					<button className='text-button'>Close</button>
					<button className='button'>Go to Checkout</button>
				</form>
			</div>
		</div>
	)
}

export default Cart
