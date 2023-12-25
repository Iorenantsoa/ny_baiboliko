import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TopStackNav } from '../../routes/TopStackNav';



const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='topTabs' component={TopStackNav} />
    </Stack.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})