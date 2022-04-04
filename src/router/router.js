import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import CountrieDetail from '../pages/CountrieDetail';
import Home from '../pages/Index';

const Router = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} exact={true} />
					<Route path="/:identifier" element={<CountrieDetail />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default Router;
