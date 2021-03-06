import React, {useContext} from 'react';
import {
View, 
StyleSheet,
Image,
TouchableOpacity
} from 'react-native';
import { Text } from 'react-native-elements';
import {Context as TopicContext} from '../context/TopicContext'
import { useNavigation } from '@react-navigation/core';

const SavedTopic = ({route}) => {

const navigation = useNavigation();

const {removeTopic} = useContext(TopicContext);

const {_id, title, image_url, info} = route.params;

const remove = async() => {
    await removeTopic({_id});
    navigation.navigate('MySaved')
    console.log("Deleted");
}


    return (
        <View>
            <Text h2>
                {title}
            </Text>
            <Image
            source={{uri:image_url}}
            style={{width:100, height:100}}
            />
            <Text>
                {info}
            </Text>

            <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={remove}
            >
                <Text h4>
                    Remove
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:"#EB8A90",
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:50,
        alignSelf:'flex-end',
        margin:30,
        borderRadius:50
    }
})

export default SavedTopic;
