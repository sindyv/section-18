import { useContext } from 'react'
import imageUrl from '../assets/logo.jpg'

import { CartContext } from '../store/cart-context'

function Header({ onOpenCart }) {
	const CartCtx = useContext(CartContext)

	return (
		<div id='main-header'>
			<div id='title'>
				<img src={imageUrl} alt='Header image' />
				<h1>REACTFOOD</h1>
			</div>
			<div className='text-button'>
				<h2 onClick={() => onOpenCart()}>
					Cart ({CartCtx.cart.length})
				</h2>
			</div>
		</div>
	)
}

export default Header
