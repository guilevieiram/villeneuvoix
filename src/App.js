import { 
	Background,
	Nav,
	Footer,
	HomePage
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
  		<div className="flex justify-center">
			  <Background />
			  <Nav height={navBarHeight} />
			  <Footer height={footerBarHeight} />

			  <div className={`max-w-xl w-full min-h-screen px-8 py-4 pt-${navBarHeight} pb-${footerBarHeight}`}>
				  <Router>
					  <Routes>
						  	<Route path="/" element={<HomePage />}/>
					  </Routes>
				  </Router>
			  </div>
    	</div>
  	);
}