import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import LoginView from '../views/LoginView'

const Outside = createStackNavigator();

const OutsideStack = ({ root }) => {

    return(
        <Outside.Navigator screenOptions={{headerShown: false,}} >
            {(root === 'ROOT_OUTSIDE' || true) &&
				<Outside.Screen
					name='OnLogin'
					component={LoginView}
					options={LoginView.navigationOptions}
				/>
            }
        </Outside.Navigator>
    )

};

const mapStateToProps = state => ({
	root: state.app.root
});


export default OutsideStack;