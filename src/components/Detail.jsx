//Loader
import loaderImg from '../images/loading.png';

const Details = ({ props }) => {
	return (
		<div className='main-detail-container'>
			<div className='img-container'>
				<img className='img' src={props.image.original !== null || props.image.original !== undefined ? props.image.original : loaderImg} />
				<h3 className='detail-item name'>{props.name}</h3>
			</div>
			<div className='details'>
				<h3 className='detail-item'>Premiered: {props.premiered}</h3>
				<h3 className='detail-item'>Language: {props.language}</h3>
				<h3 className='detail-item'>Genres: {props.genres.join(', ')}</h3>
				<h3 className='detail-item'>Ended: {props.ended}</h3>
				<h3 className='detail-item'>Status: {props.status}</h3>
				<h3 className='detail-item'>Rating: {props.rating.average !== null || props.rating.average !== undefined ? props.rating.average : NaN}</h3>
				<h3 className='detail-item'>Type: {props.type}</h3>
				<h3 className='detail-item'>OfficialSite: {props.officialSite}</h3>
			</div>
		</div>
	);
};

export default Details;
