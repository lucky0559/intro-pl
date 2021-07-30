import React from 'react';
import {
View, 
StyleSheet,
TouchableOpacity,
Image
} from 'react-native';
import { Text } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';



const ListBooks = ({header, topic, onPress}) => {

    return (
        <View style={styles.mainContainer}>
            <Text h4 style={styles.text}>
                {header}
            </Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={topic}
                keyExtractor={item => item.name}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => onPress(item.name, item.image_url, item.info)}
                        >
                            
                            <Image
                                source={{uri: item.image_url}}
                                style={styles.image}
                            />
                            <Text style={styles.text}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 20,
        borderBottomWidth: .5,
        padding: 7
    },
    image: {
        width:130,
        height:130,
        margin:10,
        backgroundColor:'rgba(191, 191, 191, .4)',
    },
    text: {
        marginLeft: 10,
        fontWeight:'bold'
    },
    touchable: {
        padding:10
    }
})

export default ListBooks;
