import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import LoginScreen from './screens/loginScreen';
import HomeScreen from './screens/homeScreen';


export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
 LoginScreen:{screen:LoginScreen},
 HomeScreen:{screen:HomeScreen}
})

const AppContainer =  createAppContainer(switchNavigator);
