import { useLocation, Link } from 'react-router-dom';

const useRegex = (input) => {
	let regex = /\/[a-zA-Z]+\/[0-9]+/i;
	return regex.test(input);
};

const Header = () => {
	const location = useLocation();
	let onDetailsPage = false;

	if (useRegex(location.pathname)) onDetailsPage = true;

	return (
		<header>
			<i className='fas fa-ticket-alt'></i>
			{onDetailsPage ? (
				<Link to='/'>
					<i className='fas fa-home header-redirect-button'></i>
				</Link>
			) : (
				''
			)}
		</header>
	);
};

export default Header;
