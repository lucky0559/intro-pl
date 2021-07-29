import React, {useState, useContext} from 'react';
import {
View, 
StyleSheet,
TouchableOpacity,
ToastAndroid
} from 'react-native';
import { 
Text ,
Input
} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignIn = () => {

   

    const {clearErrorMessage, signIn, state: {errorMessage}} = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const checker = async () => {

        clearErrorMessage();


        if(email.length != 0 && password.length != 0) {
            if(!email.includes('@')) {
                return ToastAndroid.show(
                    'Provide valid email with @',
                    ToastAndroid.SHORT
                );
            }

            await signIn({email, password});
        }

        else {
            ToastAndroid.show(
                'Empty Field',
                ToastAndroid.SHORT
            );
        }
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Spacer>
                <Text h3>
                    Sign In
                </Text>
            </Spacer>


                <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
                />

                <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
                />

            <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={checker}
            >
                <Text h3>
                    Sign In
                </Text>
            </TouchableOpacity>

        {errorMessage
        ? <Text>
            {errorMessage}
        </Text>
        : null
        }
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EB8A90',
        width: 200,
        height: 50,
        borderRadius: 50,
    },
    mainContainer: {
        alignItems: 'center'
    }
})

export default SignIn;
