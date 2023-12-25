import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import {
    HeaderButtons,
    Item,
} from 'react-navigation-header-buttons';
import { MaterialHeaderButton } from '../components/CustomHeaderButton';
import { Colors } from '../Colors/Colors';
import { TopStackNav } from './TopStackNav';
import HomeScreen from '../screens/bible/HomeScreen';

const Stack = createNativeStackNavigator();

const BibleStackNav = () => {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerTitleStyle: {
                        fontFamily: 'Merienda_700Bold',
                    },
                    headerLargeTitle: true,
                    headerLargeTitleStyle: {
                        fontSize: 28,
                        fontFamily: 'Merienda_700Bold',
                    },  
                    title: 'La Sainte Bible',
                    headerTintColor: Colors.purple,
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
                            <Item
                                title="search"
                                iconName="search"
                                color={Colors.purple}
                                onPress={() => alert('search')}
                            />
                        </HeaderButtons>
                    )

                }
            }
        >
            {/* <Stack.Screen name='topTabs' component={TopStackNav} /> */}
            <Stack.Screen name='HomeScree,' component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default BibleStackNav