import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, FlatList, Button, Text, TouchableOpacity } from 'react-native'
import { Avatar, Badge } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Card = ({item, index}) =>{

    const navigation = useNavigation();


    function HandlerLoadProfile(){
        navigation.navigate('SreamProfileView');
    }

    return(
        <TouchableOpacity 
            key={index} 
            style={{flexDirection : 'row', padding : 3, marginBottom : 10, alignItems : 'center', marginLeft : 10, marginRight : 10}}
            onPress={HandlerLoadProfile}
        >
            <Avatar
                rounded
                source={{
                    uri : item.avatar
                }}
                size={55}
            />
            <View style={{marginLeft : 15}}>
                <Text style={{fontSize : 18}}>{item.nome}</Text>
                {item.online ? 
                    <Text style={{fontSize : 16}}><Badge status="success" /> Online </Text>
                :
                    <Text style={{fontSize : 16}}><Badge status="error" /> Offline </Text>
                }
                
            </View>
        </TouchableOpacity>
    )
}

export default Card;