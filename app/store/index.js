import { createStore } from 'redux';
const START_STATES = {
    app: {
        //root: 'ROOT_LOADING',
        root : 'ROOT_OUTSIDE',
		auth: false,
    },
    user: {
		avatar: null,
		id: 0,
		nome: '',
		user: '',
		token: ''
	},
}

function reducer(state = START_STATES, action) {
    console.log(action.type);

	if (action.type === 'OUTSIDE_APP') {
		return { ...state, app: { root: 'ROOT_OUTSIDE' } };
	}

	if (action.type === 'INSIDE_APP') {
        console.log('INSIDE_APP', action.user);
        
		return { 
            ...state,
			app: { 
                ...state.app,
				auth: true,
                root: 'ROOT_INSIDE' 
            },
			user: { 
                ...state.user,
				id: action.user.id,
				user: action.user.user,
				nome: action.user.nome,
				token: action.user.token
            } 
        };
	}

	if (action.type === 'LOGOUT') {
		return { ...START_STATES, app: { root: 'ROOT_OUTSIDE' } };
	}

    return state
}

const store = createStore(reducer);

export default store;