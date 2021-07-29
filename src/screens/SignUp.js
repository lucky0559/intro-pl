import React, {useState, useContext} from 'react';
import {
View, 
StyleSheet,
TouchableOpacity,
Dimensions,
ToastAndroid
} from 'react-native';
import { 
Text ,
Input
} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const {width, height} = Dimensions.get('screen')


const SignUp = () => {

    const {signUp} = useContext(AuthContext)

    const [emailCheck, setEmailCheck] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const checker = () => {
        if(name.length != 0 && email.length != 0 && password.length != 0)
        {
            if(!email.includes('@')) {
                return setEmailCheck(true);
            }
            setEmailCheck(false);
            
            ToastAndroid.show(
                'Register Complete',
                ToastAndroid.SHORT
            )
            signUp({name, email, password});
           
        }

        else {
             ToastAndroid.show(
                'Empty field',
                ToastAndroid.SHORT
            )
        }
        
    }

    return (
        <SafeAreaView style={styles.mainContainer}>

        <Spacer>
            <Text h3>
                Sign Up
            </Text>
        </Spacer>

       
            <Input
            label="Name"
            value={name}
            onChangeText={setName}
            autoCapitalize='none'
            autoCorrect={false}
            />

            <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
            autoCorrect={false}
            />
            {emailCheck 
             ? <Text>
                 Email must contain '@'
             </Text> 
             : null
             }


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
                    Sign Up
                </Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center'
    },
    inputContainer: {

    },
    button: {
        backgroundColor: '#EB8A90',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 50,
        borderRadius: 50,
        margin: 50,
    }
})

export default SignUp;
