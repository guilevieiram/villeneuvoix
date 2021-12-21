import { 
	Background,
	Nav
} from './components';

import {
	BrowserRouter as Router,
	Route,
	Routes
} from 'react-router-dom';

export default function App() {
	const navBarHeight = 20;
  	return (
  		<div className="flex justify-center">
			  <Background />
			  <Nav height={navBarHeight} />

			  <div className={`max-w-xl w-full px-8 py-4 pt-${navBarHeight}`}>
				  <Router>
					  <Routes>
						  	<Route path="/" element={
								  <>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
							  <h1>hello world asodifn aosdif</h1>
								  </>
							  }/>
					  </Routes>
				  </Router>
			  </div>
    	</div>
  	);
}