import { Link } from 'react-router-dom';

// Npm
import useGlobalState from '../state';

const ErrorPage = () => {
	const [useSearchBoxInput, setSearchBoxInput] = useGlobalState('SearchBoxInput');

	return (
		<>
			<div className='no-result-container'>
				<h4>404</h4>
				<h5>Please try a different criteria</h5>
				<h3>
					<Link to='/' onClick={() => setSearchBoxInput('')}>
						<li className='fas fa-home'></li>
					</Link>
				</h3>
			</div>
		</>
	);
};

export default ErrorPage;
