import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { setSession } from '../../store/actions'

const LoginView = () =>{


    function connectTwitch(){
        let user = {
            id : 10,
            user : "lucasalberto",
            nome : "Lucas Alberto",
            avatar : null,
			token : "wiuerysdfhsygwerrt"
        }
        setSession(user)
    }

    function connectYouTube(){
        
    }

    return(
        <View style={{flex : 1}}>
            <View style={{flex : 0.5}}>

            </View>

            <View style={{flex : 0.5, alignItems : 'center'}}>
                <Text style={{fontSize : 18, color : '#aaa', padding : 10, fontWeight : 'bold'}}>Logue com uma das contas</Text>
                <TouchableOpacity
                    style={{
                        backgroundColor : "#9147ff",
                        width : 350,
                        borderRadius : 10,
                        padding : 10,
                        alignItems : 'center',
                        fontWeight : 'bold'
                    }}
                    onPress={connectTwitch}
                >
                    <Text style={{color : "#fff", fontSize : 20}}>Twitch</Text>
                </TouchableOpacity>
                <Text style={{padding : 10}}>Ou</Text>
                <TouchableOpacity
                    style={{
                        backgroundColor : "#FF0000",
                        width : 350,
                        borderRadius : 10,
                        padding : 10,
                        alignItems : 'center',
                        fontWeight : 'bold'
                    }}
                >
                    <Text style={{color : "#fff", fontSize : 20}}>YouTube</Text>
                </TouchableOpacity>
            </View>
            

        </View>
    )
}

export default LoginView