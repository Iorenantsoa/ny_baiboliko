import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import OptionScreen from '../screens/options/OptionScreen';
import BibleActuelleScreen from '../screens/options/BibleActuelleScreen';

const Stack = createNativeStackNavigator();

const OptionsStackNav = () => {
    return (
        <Stack.Navigator
             screenOptions={
                {
                    headerLargeTitle: true , 
                    headerLargeTitleStyle  : {
                        fontSize : 28 , 
                    }
                }
            }
        >
            <Stack.Screen name="MainOptionScreen" component={OptionScreen} options={{title: "Options"}} />
            <Stack.Screen name="BibleActuelleScreen" component={BibleActuelleScreen} />
        </Stack.Navigator>
    )
}

export default OptionsStackNav