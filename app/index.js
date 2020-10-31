import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';

import store from './store';

class Root extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		//loadScreen();
		//stateSession();
	}

	componentWillUnmount() {

	}

	render() {
		return (
			<Provider store={store}>
				<AppContainer />
			</Provider>
		);
	}
}

export default Root;