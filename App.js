import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import MySaved from './src/screens/MySaved';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Context as AuthContext } from './src/context/AuthContext';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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
            initialRouteName='Home'
          >
            <Stack.Screen
            name='TabScreens'
            component={TabScreens}
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
    <AuthProvider>
      <RouteNavigation/>
    </AuthProvider>
  )
}