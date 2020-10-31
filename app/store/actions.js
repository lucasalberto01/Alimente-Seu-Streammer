import store from './index';

function setSession(user){
    console.log('setSession', { user });

	const payload_redux = {
		type: 'INSIDE_APP',
		auth: true,
		user: {
			id : user.id,
			user : user.user,
			nome : user.nome,
			avatar : user.avatar,
			token : user.token
		},
	};
	store.dispatch(payload_redux);
}

export {
    setSession
}