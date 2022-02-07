// GlobalStateObject
import useGlobalState from '../state/index';
import { useEffect } from 'react';
import { useRef } from 'react';

const SearchBar = () => {
	const [useSearchBoxInput, setSearchBoxInput] = useGlobalState('SearchBoxInput');
	const inputField = useRef();
	const formField = useRef();
	let StoreSearchResult;
	let CheckInput;

	useEffect(() => {
		if (useSearchBoxInput == '') {
			inputField.current.value = '';
		}

		formField.current.addEventListener('submit', (e) => {
			e.preventDefault();
			return false;
		});
	});

	StoreSearchResult = () => {
		setSearchBoxInput(inputField.current.value);
		return false;
	};

	CheckInput = (e) => {
		if (e.target.value.trim() === '') {
			setSearchBoxInput('');
		}
	};

	return (
		<>
			<form className='input-container' onSubmit={StoreSearchResult} onChange={CheckInput} ref={formField}>
				<input type='text' placeholder='The 100' ref={inputField} />
				<span>
					<i
						className='fas fa-search'
						onClick={() => {
							StoreSearchResult(formField.current);
						}}></i>
				</span>
			</form>
		</>
	);
};

export default SearchBar;
