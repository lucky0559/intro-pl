import React, { useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import MySaved from './src/screens/MySaved';
import Topic from './src/screens/Topic';
import SavedTopic from './src/screens/SavedTopic';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Context as AuthContext } from './src/context/AuthContext';
import {Provider as TopicProvider} from './src/context/TopicContext'
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const RouteNavigation = () => {

  const { state } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {
        state.token === null ? (
          <Stack.Navigator
            screenOptions = {{
              headerShown: false
            }}
            initialRouteName="Welcome"
          >
            <Stack.Screen
            name='Welcome'
            component={Welcome}
            />
            <Stack.Screen
            name='SignIn'
            component={SignIn}
            />
            <Stack.Screen
            name='SignUp'
            component={SignUp}
            />
          </Stack.Navigator>
        )
        : (
          <Stack.Navigator
            screenOptions= {{
              headerShown: false
            }}
            initialRouteName='TabScreens'
          >
            <Stack.Screen
            name='TabScreens'
            component={TabScreens}
            />
            <Stack.Screen
            name='Topic'
            component={Topic}
            options={{
              headerShown:true
            }}
            />
            <Stack.Screen
            name='SavedTopic'
            component={SavedTopic}
            options={{
              headerShown:true
            }}
            />
          </Stack.Navigator>
        )
       
      }
    </NavigationContainer>
  )
}

const TabScreens = () => {
  return (
    <Tab.Navigator
    initialRouteName='Home'
    screenOptions={({route}) => ({
      tabBarIcon: ({ focused, size }) => {
        let iconName;

        if(route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline'
          size = focused ? 30 : 20
        }
        else if(route.name === 'MySaved') {
          iconName = focused ? 'save' : 'save-outline'
          size = focused ? 30 : 20
        }

        return (
          <Ionicons
            name = {iconName}
            size = {size}
          />
        )

      }
    })}
    >
      <Tab.Screen
      name='Home'
      component={Home}
      />

      <Tab.Screen
      name='MySaved'
      component={MySaved}
      />
    </Tab.Navigator>
  )
}





export default function App() {
  return (
    <TopicProvider>
      <AuthProvider>
        <RouteNavigation/>
      </AuthProvider>
    </TopicProvider>
  )
}