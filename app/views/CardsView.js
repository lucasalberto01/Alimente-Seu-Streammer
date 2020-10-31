import React from 'react';
import { View, Text, Image } from 'react-native';

const CardView = () =>{
    return(
        <View style={{
            padding : 10, 
            margin : 50, 
            alignItems : 'center', 
            marginTop : -60, 
            backgroundColor : '#fff', 
            flexDirection : 'row',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: 24,
        }}>
            <Image 
                source={require('../../src/hamburger.jpg')} 
                style={{width: 40, height: 40, margin : 20}} 
            />
            <View style={{margin : 20}}>
                <Text style={{fontSize : 25}}>Hamburguer</Text>
                <Text style={{color : "#aaa"}}>Comida Preferida</Text>
            </View>
        </View>
    )
}

export default CardView