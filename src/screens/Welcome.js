import React, {useEffect, useContext} from 'react';
import {
View,
StyleSheet,
Dimensions,
TouchableOpacity
} from 'react-native';
import { 
Text 
} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as AuthContext } from '../context/AuthContext';


const {width, height} = Dimensions.get('screen');

const Welcome = ({navigation}) => {

    const {localSignIn} = useContext(AuthContext);

useEffect(() => {
    localSignIn();
},[])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Text>
                    Welcome Screen
                </Text>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={() => navigation.navigate('SignIn')}
                >
                    <Text h4>
                        Sign In
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={() => navigation.navigate('SignUp')}
                >
                    <Text h4>
                        Sign Up
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#42E2B8'
    },
    topContainer: {
        flex: 2,
        backgroundColor: '#42E2B8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: '#F3DFBF',
        borderTopLeftRadius:  10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        justifyContent:'center'
    },
    button: {
        backgroundColor: '#EB8A90',
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        margin: 20,
    }
})

export default Welcome;
