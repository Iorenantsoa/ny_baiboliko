import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import {
    HeaderButtons,
    Item, 
} from 'react-navigation-header-buttons';
import { MaterialHeaderButton } from '../components/CustomHeaderButton';

import HomeScreen from '../screens/bible/HomeScreen';

const Stack = createNativeStackNavigator();

const BibleStackNav = () => {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerLargeTitle: true , 
                    headerLargeTitleStyle  : {
                        fontSize : 28 , 
                    },
                    title : 'Bible',
                    headerRight: () => (
                                <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
                                    <Item
                                        title="search"
                                        iconName="search"
                                        onPress={() => alert('search')}
                                    />
                                </HeaderButtons>
                            )

                }
            }

        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default BibleStackNav