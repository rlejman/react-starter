import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { actions } from 'src/auth';
import { AppDispatch, StoreRootType } from 'src/store';
import logo from './logo.svg';

function App(): JSX.Element {
	const isLogedIn = useSelector(
		(state: StoreRootType) => state.auth.isAuthenticated
	);
	const dispatch = useDispatch<AppDispatch>();
	const login = (): void => {
		dispatch(actions.login());
	};
	const logout = (): void => {
		dispatch(actions.logout());
	};

	return (
		<div className="App">
			<header className="App-header">
				{isLogedIn ? <img src={logo} className="App-logo" alt="logo" /> : null}
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<button onClick={login} type="button">
					{' '}
					Login
				</button>
				<button onClick={logout} type="button">
					{' '}
					Logout
				</button>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
