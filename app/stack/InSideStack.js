import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import ListStreamView from '../views/ListStreamsView'
import SreamProfileView from '../views/StreamProfileView'
import { connect } from 'react-redux';

const InsideStack = createStackNavigator();

const InsideStackNavigator = ({ root }) => {

    return(
        <InsideStack.Navigator mode="modal"  screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} >
            <InsideStack.Screen
                name="ListStreamView"
                component={ListStreamView}
                options={{ title: 'Home' }}
            />
            <InsideStack.Screen
                name="SreamProfileView"
                component={SreamProfileView}
                options={{ title: 'Streammer' }}
            />
        </InsideStack.Navigator>
    )

};

const mapStateToProps = state => ({
	root: state.app.root
});

export default InsideStackNavigator;