import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native";
import icon from "./assets/cat.jpg";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cau1 from './components/Cau1';
import Cau2 from './components/Cau2';
import Cau3 from './components/Cau3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Cau1" component={Cau3} />
        
        
      </Stack.Navigator>
    </NavigationContainer >
  )
}

const styles = StyleSheet.create({
  container: {
    
  },

});