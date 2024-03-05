function MealItem() {
	return (
		<div className="meal-item">
			<img src="../assets/logo.jpg" alt="Picture of a meal" />
			<article>
				<h3>Mac & Cheese</h3>
				<p className="meal-item-price">$8.99</p>
				<div className="meal-item-description">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat culpa
					eligendi nisi ipsum qui. Sit iusto, incidunt quo commodi eos
					laudantium? Commodi expedita culpa, aperiam dolores dolor accusamus
					inventore. Dolor!
				</div>
				<div className="meal-item-actions">
					<button className="button">Add to cart</button>
				</div>
			</article>
		</div>
	)
}

export default MealItem
