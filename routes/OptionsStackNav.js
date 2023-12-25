import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import OptionScreen from '../screens/options/OptionScreen';
import BibleActuelleScreen from '../screens/options/BibleActuelleScreen'; 
import { Colors } from '../Colors/Colors';

const Stack = createNativeStackNavigator();

const OptionsStackNav = () => {
    return (
        <Stack.Navigator
            screenOptions={ 
                {
                    headerTitleStyle : { 
                        fontFamily  : 'Merienda_700Bold',
                    },
                    headerTintColor: Colors.purple,
                    headerLargeTitle: true,
                    headerLargeTitleStyle: {
                        fontSize: 28,
                        fontFamily  : 'Merienda_700Bold',
                    }
                }
            }
        >
            <Stack.Screen name="MainOptionScreen" component={OptionScreen} options={{ title: "Options" }} />
            <Stack.Screen name="BibleActuelleScreen" component={BibleActuelleScreen} />
        </Stack.Navigator>
    )
}

export default OptionsStackNav