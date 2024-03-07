import { useContext } from 'react'
import { CartContext } from '../store/cart-context'

function MealItem({ meal }) {
	const CartCtx = useContext(CartContext)

	function handleAddToCart() {
		CartCtx.updateCart(meal)
	}

	return (
		<div className='meal-item'>
			<img
				src={`http://localhost:3000/${meal.image}`}
				alt='Picture of a meal'
			/>
			<article>
				<h3>{meal.name}</h3>
				<div className='meal-item-price'>$ {meal.price}</div>
				<div className='meal-item-description'>{meal.description}</div>
				<div className='meal-item-actions'>
					<button className='button' onClick={handleAddToCart}>
						Add to cart
					</button>
				</div>
			</article>
		</div>
	)
}

export default MealItem
