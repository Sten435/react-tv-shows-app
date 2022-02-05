import { useState, useEffect } from 'react';

// NPM
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

// Image
import image_not_found from '../images/img-not-found.png';

// Component
import ShowCard from '../components/ShowCard';

const HomePage = () => {
	const [usedata, setdata] = useState();

	useEffect(() => {
		const shuffleArr = (array) => {
			for (var i = array.length - 1; i > 0; i--) {
				var rand = Math.floor(Math.random() * (i + 1));
				[array[i], array[rand]] = [array[rand], array[i]];
			}
		};

		const FetchShow = async () => {
			try {
				let data = await (await axios(`https://api.tvmaze.com/shows`)).data;

				Object.keys(data).map(function (key, index) {
					if (data[key] === undefined || data[key] === null) {
						if (key === 'img') {
							data[key] = image_not_found;
						} else {
							data[key] = NaN;
						}
					}
				});
				shuffleArr(data);
				setdata(data);
			} catch (error) {
				console.log(error);
			}
		};

		FetchShow();
	}, []);

	return (
		<>
			{usedata ? (
				<div className='poster-container'>
					{usedata.map((props) => {
						return <ShowCard key={props.id} props={props} />;
					})}
				</div>
			) : (
				<div className='loader-container'>
					<Oval ariaLabel='loading-indicator' height={50} width={50} strokeWidth={1} strokeWidthSecondary={2000} color='#19191E' secondaryColor='grey' />
				</div>
			)}
		</>
	);
};

export default HomePage;
