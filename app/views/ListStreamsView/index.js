import React from 'react'
import { View, FlatList, Button, Text, TouchableOpacity } from 'react-native'
import { Avatar, Badge } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Card from './Card'

const stremmes = [
    {
        "avatar" : 'https://static-cdn.jtvnw.net/jtv_user_pictures/e0e33c68-f53d-4308-a780-62b1bfd09d17-profile_image-70x70.png',
        "nome" : "Rato Borrachudo",
        "online" : true
    },{
        "avatar" : 'https://static-cdn.jtvnw.net/jtv_user_pictures/cc694858-d587-4314-bc6f-fd235a71006e-profile_image-70x70.png',
        "nome" : "Drezzy",
        "online" : false
    },{
        "avatar" : "https://static-cdn.jtvnw.net/jtv_user_pictures/50e638b7-ff02-4b79-b923-8001915eb7b3-profile_image-70x70.png",
        "nome" : "PandoraCao", 
        "online" : false
    },{
        "avatar" : "https://static-cdn.jtvnw.net/jtv_user_pictures/14f94d13631cfdd9-profile_image-70x70.jpeg",
        "nome" : "Toddynho",
        "online" : false
    }

]


const ListStreamView = ({navigation }) =>{

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
              <TouchableOpacity
                style={{marginLeft : 10}}
              >
                <Avatar 
                    rounded
                    source={{uri : "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-70x70.png"}}
                    
                />
            </TouchableOpacity>
          ),
          headerRight : () =>(
              <TouchableOpacity
                style={{marginRight : 10, justifyContent : 'center', alignItems : 'center'}}
              >
                  <MaterialCommunityIcons name="format-list-text" size={25} />
              </TouchableOpacity>
          )
        });
      }, [navigation]);

    return(
        <View>
            <Text style={{marginLeft : 10, fontSize : 20, color : "#333", marginTop : 15, marginBottom : 15}}>Streamms que você segue</Text>
            <FlatList 
                renderItem={({item, index}) => (<Card item={item} index={index} />)}
                data={stremmes}
            />
        </View>
    )
}

export default ListStreamView