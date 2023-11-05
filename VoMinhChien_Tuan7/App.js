import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1}></Stack.Screen>
        <Stack.Screen name="Screen2" component={Screen2}></Stack.Screen>
        <Stack.Screen name="Screen3" component={Screen3}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
