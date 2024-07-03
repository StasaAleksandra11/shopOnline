import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import HeaderComponent from './components/HeaderComponent';
import NavBarComponent from './components/NavBarComponent';
import CategoryComponent from './components/CategoryComponent';
import axios from 'axios';
 
axios.defaults.baseURL = 'https://dummyjson.com'
function App() {
	const [activeHeader, setActiveHeader] = useState(true);
    
	
	return (
		<>
			{activeHeader && (
				<HeaderComponent setActiveHeader={setActiveHeader} />
			)}
			<NavBarComponent />
			<CategoryComponent />
			<Outlet />
		</>
	);
}

export default App;
