import MealItem from './MealItem'
import { useFetch } from '../hooks/useFetch'

import { fetchMeals } from '../API'
function Meals() {
	const {
		isFetching,
		error,
		fetchedData: fetchedMeals,
		setFetchedData,
	} = useFetch(fetchMeals, [])

	if (isFetching) {
		return <p>The meals are loading</p>
	}

	if (error) {
		return <p>There was an error fetching the data</p>
	}

	return (
		<section id='meals'>
			{fetchedMeals.length > 0 ? (
				fetchedMeals.map((meal) => {
					return <MealItem key={meal.id} meal={meal} />
				})
			) : (
				<p>No meals were found :</p>
			)}
		</section>
	)
}

export default Meals
