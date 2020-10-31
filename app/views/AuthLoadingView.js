import React from 'react'
import { ActivityIndicator, View, Text } from 'react-native'

const AuthLoadingView = () =>{
    return(
        <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
            <ActivityIndicator size="large" color="#000" />
            <Text style={{marginTop : 5}}>Carregando</Text>
        </View>
    )
}

export default AuthLoadingView