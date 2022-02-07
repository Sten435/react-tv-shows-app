import { useLocation, Link } from 'react-router-dom';

//Npm
import useGlobalState from '../state';

// Component
import SearchBar from './SearchBar';

const useRegex = (input) => {
	let regex = /\/[a-zA-Z]+\/[0-9]+/i;
	return regex.test(input);
};

const onHomePage = (input) => {
	if (input === '/') return true;
	return false;
};

const Header = () => {
	const [useSearchBoxInput, setSearchBoxInput] = useGlobalState('SearchBoxInput');
	let onDetailsPage = false;
	const location = useLocation();
	if (useRegex(location.pathname)) onDetailsPage = true;

	return (
		<header className={`${onHomePage(location.pathname) ? 'homepage-header' : ''}`}>
			<Link
				to='/'
				onClick={() => setSearchBoxInput('')}
				className={`${onHomePage(location.pathname) ? 'homepage-icon' : ''}`}>
				<i className='fas fa-ticket-alt'></i>
			</Link>
			{onDetailsPage ? (
				<Link to='/'>
					<i className='fas fa-home header-redirect-button'></i>
				</Link>
			) : (
				<SearchBar />
			)}
		</header>
	);
};

export default Header;
