import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AddScreen from "./screens/AddScreen";

const Stack = createNativeStackNavigator();

const App = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Add" component={AddScreen} options={{headerTitle: ''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;