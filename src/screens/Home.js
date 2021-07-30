import React, {useContext} from 'react';
import {
StyleSheet,
ScrollView,
Button
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListBooks from '../components/ListBooks';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';



const front_end_web = require('../data/frontEndWeb.json');
const back_end_web = require('../data/backEndWeb.json');
const desktop = require('../data/desktop.json');
const game = require('../data/game.json');
const mobile = require('../data/mobile.json');
const others = require('../data/others.json');
const system = require('../data/system.json');

const Home = ({navigation}) => {

    const {signOut} = useContext(AuthContext);

    const topicPress = (topicName,topicImage, topicInfo) => {
        navigation.navigate('Topic', {title: topicName, image_url: topicImage, info: topicInfo})
    }

    return (
        <SafeAreaView>

        <ScrollView>

        <ListBooks
        header="Hot Front End Web"
        topic={front_end_web}
        onPress={topicPress}
        />

        <ListBooks
        header="Hot Back End Web"
        topic={back_end_web}
        onPress={topicPress}
        />

        <ListBooks
        header="Hot in Desktop"
        topic={desktop}
        onPress={topicPress}
        />

        <ListBooks
        header="Hot in Game"
        topic={game}
        onPress={topicPress}
        />

        <ListBooks
        header="Hot in Mobile"
        topic={mobile}
        onPress={topicPress}
        />

        <ListBooks
        header="Hot in System"
        topic={system}
        onPress={topicPress}
        />

        <ListBooks
        header="Others"
        topic={others}
        onPress={topicPress}
        />

            <Spacer>
                <Button
                title="Sign Out"
                onPress={signOut}
                />
            </Spacer>
   
        </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

})

export default Home;
