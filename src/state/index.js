import { createGlobalState } from 'react-hooks-global-state';

const initialState = { SearchBoxInput: '' };
const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState;
