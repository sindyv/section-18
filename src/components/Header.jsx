import imageUrl from '../assets/logo.jpg'

function Header({ onOpenCart }) {
	return (
		<div id='main-header'>
			<div id='title'>
				<img src={imageUrl} alt='Header image' />
				<h1>REACTFOOD</h1>
			</div>
			<div className='text-button'>
				<h2 onClick={() => onOpenCart()}>Cart (2)</h2>
			</div>
		</div>
	)
}

export default Header
