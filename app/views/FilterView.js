import React from 'react';
import { View, Text } from 'react-native';

const App = () =>{
	return(
		<View style={{
            paddingBottom : 100, 
            padding : 20, 
            backgroundColor : '#9147ff', 
            borderBottomRightRadius : 25, 
            borderBottomLeftRadius : 25
        }}>
			<Text style={{fontSize : 25, color : '#eee'}}>Rato Borrachudo</Text>
		</View>
	)
}

export default App;
