//Loader
import loaderImg from '../images/img-not-found.png';

//Css
import '../css/DetailPage.css';

const Details = ({ props }) => {
	let average = NaN;
	if (props.rating !== null || props.rating.average !== null) average = props.rating.average;

	let image = loaderImg;
	if (props.image !== null || props.image.original !== null) image = props.image.original;

	let color = 'yellow';
	if (average <= 4) {
		color = '#A62024';
	} else {
		if (average >= 7) color = '#019934';
		else if (average >= 5) color = '#DF8A19';
	}

	return (
		<div className='main-detail-container'>
			<div className='img-container'>
				<img className='img' src={image} />
			</div>
			<div className='details'>
				<ul className='list-group'>
					<li className='list-group-item'>
						<p>Name: </p>
						<b> {props.name}</b>
					</li>
					<li className='list-group-item'>
						<p>Language: </p>
						<b>{props.language}</b>
					</li>
					<li className='list-group-item'>
						<p>Genres: </p>
						<b>{props.genres.join(', ')}</b>
					</li>
					<li className='list-group-item'>
						<p>Premiered: </p>
						<b>{props.premiered}</b>
					</li>
					{props.ended ? (
						<li className='list-group-item'>
							<p>Ended: </p>
							<b>{props.ended}</b>
						</li>
					) : (
						''
					)}
					<li className='list-group-item'>
						<p>Status: </p>
						<b>{props.status}</b>
					</li>
					<li className='list-group-item'>
						<p>Rating: </p>
						<b style={{ outline: `3.5px ${color} solid` }} className='details-rating'>
							{average ? average : <i className='far fa-star-half no-rating'></i>}
						</b>
					</li>
					<li className='list-group-item'>
						<p>Type: </p>
						<b>{props.type}</b>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Details;
