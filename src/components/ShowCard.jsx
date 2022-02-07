import { useNavigate } from 'react-router-dom';

// Npm
import { LazyLoadImage } from 'react-lazy-load-image-component';

// GlobalStateObject
import useGlobalState from '../state/index';

const ShowCard = ({ props }) => {
	const navigate = useNavigate();
	const [useSearchBoxInput, setSearchBoxInput] = useGlobalState('SearchBoxInput');

	const goto = (to) => {
		setSearchBoxInput('');
		navigate(`/details/${to}`);
	};

	let image = null;
	if (props.image !== null) {
		if (props.image.original !== null || props.image.original !== undefined) image = props.image.original;
	}

	let average = null;
	if (props.rating !== null) {
		if (props.rating.average !== null || props.rating.average !== undefined) average = props.rating.average;
	}

	let color = 'yellow';
	if (average <= 4) {
		color = '#A62024';
	} else {
		if (average >= 7) color = '#019934';
		else if (average >= 5) color = '#DF8A19';
	}

	return image === null ? (
		<></>
	) : (
		<div className='image-container' onClick={() => goto(props.id)}>
			<LazyLoadImage className='show-poster' src={image} />
			{
				<>
					<div className='rating' style={{ outline: `3.5px ${color} solid` }}>
						{average ? average : <i className='far fa-star-half no-rating'></i>}
					</div>
					<div className='info'>
						<p className='name'>{props.name}</p>
					</div>
				</>
			}
		</div>
	);
};

export default ShowCard;
