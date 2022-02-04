import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import HomePage from './components/HomePage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/details/:id' element={<DetailPage />} />
				<Route path='*' element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
