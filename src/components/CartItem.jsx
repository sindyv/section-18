function CartItem({ item }) {
	return (
		<li className='cart-item'>
			<p>
				{item.name} - 2 x ${item.price}
			</p>
			<span className='cart-item-actions'>
				<button>-</button>
				<span>2</span>
				<button>+</button>
			</span>
		</li>
	)
}

export default CartItem
