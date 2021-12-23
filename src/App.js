import { 
	Background,
	Nav,
	Footer,
	HomePage,
	NotFoundPage,
	VideosPage,
	PhotosPage,
	Journal
} from './components';

import {
	HashRouter as Router,
	Route,
	Routes
} from 'react-router-dom';
import { useState } from 'react';

export default function App() {
	const [privateMode, setPrivateMode] = useState(true);

  	return (
  		<div className="flex justify-center relative overflow-x-hidden ">
			<div className={`max-w-3xl w-full min-h-screen px-3 py-4 my-12`}>
				<Router>
					<Background />
					<Nav />
					<Footer />
					<Routes>
						<Route path="/" element={<HomePage privateMode={privateMode}/>}/>
						<Route path="/videos" element={<VideosPage privateMode={privateMode}/>} />
						<Route path="/photos" element={<PhotosPage privateMode={privateMode}/>} />
						<Route path="/journal/*" element={<Journal privateMode={privateMode}/>} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Router>
			</div>
    	</div>
  	);
}