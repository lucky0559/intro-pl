import React, {useContext, useEffect} from 'react';
import {
View,
StyleSheet,
FlatList,
Text,
TouchableOpacity,
Image,
Button,
ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Context as TopicContext} from '../context/TopicContext'
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';


const MySaved = ({navigation}) => {

const {showSavedTopic, state} = useContext(TopicContext);


useEffect(() => {
    const showSaved = navigation.addListener('focus', () => showSavedTopic());
    return showSaved;
},[navigation])




    return (
        <SafeAreaView>
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({item}) => {
                    return (
                        <View style={styles.mainContainer}>
                        <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate('SavedTopic',{_id: item._id, title: item.title, image_url: item.image_url, info: item.info})}
                        >
                            
                            <Image
                                source={{uri: item.image_url}}
                                style={styles.image}
                            />

                            <Text style={styles.text}>
                                {item.title}
                            </Text>

                        </TouchableOpacity>
                        </View>
                       
                    )
                }}
            />

            
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    image: {
        width:130,
        height:130,
        margin:10,
        backgroundColor:'rgba(191, 191, 191, .4)',
    },
    text: {
        marginLeft: 10,
        fontWeight:'bold',
        textAlign:'center'
    },
    mainContainer: {
        marginBottom: 20,
        borderBottomWidth: .5,
        padding: 7,
        alignItems: 'center'
    },
})

export default MySaved;
