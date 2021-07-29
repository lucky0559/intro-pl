import React from 'react';
import {
StyleSheet,
} from 'react-native';
import { 
Text,
Button
} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../components/Spacer';


const Home = () => {
    return (
        <SafeAreaView>
            <Spacer>
                <Text>
                    Home
                </Text>
            </Spacer>

            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

})

export default Home;
