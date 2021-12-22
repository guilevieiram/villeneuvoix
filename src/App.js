import { 
	Background,
	Nav,
	Footer,
	HomePage,
	NotFoundPage,
	VideosPage,
	PhotosPage
} from './components';

import {
	HashRouter as Router,
	Route,
	Routes
} from 'react-router-dom';

export default function App() {
	const navBarHeight = 20;
	const footerBarHeight = 16;

  	return (
  		<div className="flex justify-center relative overflow-x-hidden ">
			<div className={`max-w-3xl w-full min-h-screen px-3 py-4 mt-${navBarHeight} mb-${footerBarHeight}`}>
				<Router>
					<Background />
					<Nav height={navBarHeight} />
					<Footer height={footerBarHeight} />
					<Routes>
						<Route path="/" element={<HomePage />}/>
						<Route path="/videos" element={<VideosPage />} />
						<Route path="/photos" element={<PhotosPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Router>
			</div>
    	</div>
  	);
}