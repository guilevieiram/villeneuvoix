import { 
	Background,
	Nav,
	Footer,
	HomePage,
	NotFoundPage
} from './components';

import {
	BrowserRouter as Router,
	Route,
	Routes
} from 'react-router-dom';

export default function App() {
	const navBarHeight = 20;
	const footerBarHeight = 12;
  	return (
  		<div className="flex justify-center relative overflow-x-hidden ">
			<Background />
			<Nav height={navBarHeight} />
			<Footer height={footerBarHeight} />

			<div className={`max-w-3xl w-full min-h-screen px-8 py-4 pt-${navBarHeight} pb-${footerBarHeight}`}>
				<Router>
					<Routes>
						<Route path="/" element={<HomePage />}/>
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Router>
			</div>
    	</div>
  	);
}