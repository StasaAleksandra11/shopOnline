import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

//Pages
import HomePage from './pages/HomePage.jsx';
import SingleProductPage from './pages/SingleProductPage.jsx';


//router
import {
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store/store.js';

//clerk
import { ClerkProvider } from '@clerk/clerk-react';
// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error('Missing Publishable Key');
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <div>error</div>,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/singleProduct/:id',
				element: <SingleProductPage />
			}
			
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
				<RouterProvider router={router} />
			</ClerkProvider>
		</Provider>
	</React.StrictMode>
);
