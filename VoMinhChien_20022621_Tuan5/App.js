import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Page2_a from './component/Page2_a';
import Page2_b from './component/Page2_b';
import Page2_c from './component/Page2_c';
import Tiki_Ok from './component/Tiki_Ok';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// const Tab = createBottomTabNavigator();
const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          textAlign: 'center',
          fontSize: 10, 
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="aaaaa"
        component={Page2_a}
        options={{ headerShown: false, }}
      />

      <Tab.Screen
        name="Page2_b"
        component={Page2_b}
        options={{ headerShown: false, }}
      />
      <Tab.Screen
        name="Page2_c"
        component={Page2_c}
        options={{ headerShown: false, }}
      />
      <Tab.Screen
        name="Tiki_Ok"
        component={Tiki_Ok}
        options={{ headerShown: false, }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}