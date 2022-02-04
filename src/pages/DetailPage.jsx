import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

// Components
import Detail from '../components/Detail';

// Image
import loaderImg from '../images/loading.png';

// Css
import './DetailsPage.css';

const DetailPage = () => {
	const [usedata, setdata] = useState();
	const navigate = useNavigate();
	const { id } = useParams();
	useEffect(async () => {
		const FetchShow = async (id) => {
			try {
				let data = await (await axios(`https://api.tvmaze.com/shows/${id}`)).data;

				Object.keys(data).map(function (key, index) {
					if (data[key] === undefined || data[key] === null) {
						if (key === 'img') {
							data[key] = loaderImg;
						} else {
							data[key] = NaN;
						}
					}
				});

				setdata(data);
			} catch (error) {
				console.clear();
				navigate('/');
				console.clear();
			}
		};

		FetchShow(id);
	}, []);

	return <>{usedata ? <Detail props={usedata} /> : <img className='small-loader' src={loaderImg} />}</>;
};

export default DetailPage;
