import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OutSideStack from './stack/OutSideStack';
import InSideStack from './stack/InSideStack';
import AuthLoadingView from './views/AuthLoadingView'

const Stack = createStackNavigator();

const App = ({root}) =>{

	return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }} >
                {console.log(root)}
                {root === 'ROOT_LOADING' && (<Stack.Screen name="AuthLoading" component={AuthLoadingView} />)}

                {root === 'ROOT_OUTSIDE' && (<Stack.Screen name="OutsideStack" component={OutSideStack} />)}

                {root === 'ROOT_INSIDE' && (<Stack.Screen name="InsideStack" component={InSideStack} />)}
            </Stack.Navigator>
        </NavigationContainer>
	
	)
}

const mapStateToProps = (state) => ({
	root: state.app.root,
	banido: state.user.banido,
});

export default connect(mapStateToProps)(App);
