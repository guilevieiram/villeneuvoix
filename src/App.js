import { 
	Background
} from './components';

import {
	BrowserRouter as Router,
	Route,
	Routes
} from 'react-router-dom';

export default function App() {
  	return (
  		<div className="flex justify-center">
			  <Background />
			  <div className="max-w-xl w-full px-8 py-4">
				  <Router>
					  <Routes>
						  	<Route path="/" element={<h1>hello world</h1>}/>
					  </Routes>
				  </Router>
			  </div>
    	</div>
  	);
}