import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

// Components
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route exact path='/details/:id' element={<DetailPage />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
