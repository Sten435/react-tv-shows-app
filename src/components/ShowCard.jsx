import { useNavigate } from 'react-router-dom';

const ShowCard = ({ props }) => {
	const navigate = useNavigate();

	const goto = (to) => {
		navigate(`/details/${to}`);
	};

	return <img className='show-poster' onClick={() => goto(props.id)} src={props.image.original ? props.image.original : 'https://cdn.pixabay.com/photo/2022/01/06/12/49/dried-flowers-6919415_960_720.jpg'} />;
};

export default ShowCard;
