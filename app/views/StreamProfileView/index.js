import React from 'react'
import { View, ImageBackground, Dimensions, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window');

const comidas = [
	{
		"nome" : "Hamburguer",
        "descricao" : "Um amburguer show",
        "source" : require('../../../src/beirute.jpg')
	},
	{
		"nome" : "Beirute",
        "descricao" : "Um beirute quentinho",
        "source" : require('../../../src/hamburger.jpg')
	},
	{
		"nome" : "Costela",
        "descricao" : "Uma costela do outback slow",
        "source" : require('../../../src/beirute.jpg')
	}
]


const StreamProfileView = ({}) =>{

    function Item({item, index}){
        return(
            <TouchableOpacity>
                <ImageBackground
                    source={item.source}
                    style={{width : width, margin : 3, padding : 10}}
                >
                    <Text>{item.nome}</Text>
                    <Text>{item.descricao}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return(
        <View>
            <ImageBackground
                source={{uri : 'https://static-cdn.jtvnw.net/jtv_user_pictures/adcc3882-a13f-4edf-9dce-8cddfa3bc522-profile_banner-480.jpeg'}}
                width={width}
                style={{width : width, height : 250, alignItems : 'center'}}
                blurRadius={5}
                
            >
                <View
                    style={{
                        position : 'absolute' , bottom : 20, alignItems : 'center'
                    }}
                >
                    <Avatar 
                        rounded
                        size="xlarge"
                        source={{uri : 'https://static-cdn.jtvnw.net/jtv_user_pictures/e0e33c68-f53d-4308-a780-62b1bfd09d17-profile_image-70x70.png'}}
                        containerStyle={{borderWidth : 3, borderColor : "#fff"}}
                    />
                    <Text style={{color : "#fff", fontSize : 25, marginTop : 5}}>Rato Borrachudo</Text>
                </View>
            </ImageBackground>
            <View style={{alignItems : 'center'}}>
                <ImageBackground
                    imageStyle={{
                        borderRadius : 10,
                        opacity : 0.5
                    }}
                    style={{
                        backgroundColor : '#000',
                        padding : 10,
                        width : width*0.95,
                        height : 150,
                        marginTop : 10,
                        
                        flexDirection : 'column',
                        alignItems : 'center'
                    }}
                    source={{uri : "https://emc.acidadeon.com/dbimagens/lanches_como_790x505_06032018153232.jpg"}}
                >
                    <View 
                        style={{alignItems : 'center', position : 'absolute', bottom : 15}}
                    >
                        <Text style={{fontSize : 20, color : "#fff"}}>Comida Preferida</Text>
                        <Text style={{fontWeight : 'bold', fontSize : 18, color : "#fff"}}>Hamburguer</Text>
                    </View>
                </ImageBackground>
            </View>
            <Text style={{fontSize : 18, marginLeft : 0, padding : 8, color : "#444", fontWeight : "bold"}}>Lista de Comidas</Text>
            <FlatList 

                data={comidas}
                renderItem={Item}
            />

        </View>
    )   
}

export default StreamProfileView;