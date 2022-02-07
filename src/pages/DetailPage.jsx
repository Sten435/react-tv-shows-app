import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// NPM
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

// Components
import Detail from '../components/Detail';

// Image
import loaderImg from '../images/loading.png';

const DetailPage = () => {
	const [usedata, setdata] = useState();
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
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

	return (
		<>
			{usedata ? (
				<Detail props={usedata} />
			) : (
				<div className='container'>
					<Oval
						ariaLabel='loading-indicator'
						height={50}
						width={50}
						strokeWidth={1}
						strokeWidthSecondary={2000}
						color='#19191E'
						secondaryColor='grey'
					/>
				</div>
			)}
		</>
	);
};

export default DetailPage;
