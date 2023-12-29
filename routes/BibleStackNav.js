import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import {
    HeaderButtons,
    Item,
} from 'react-navigation-header-buttons';
import { MaterialHeaderButton } from '../components/CustomHeaderButton';
import { CustomHeaderButtomIonicons } from '../components/CustomHeaderButtomIonicons';
import { Colors } from '../Colors/Colors';
import { TopStackNav } from './TopStackNav';
import PageView from '../screens/bible/PageView';

const Stack = createNativeStackNavigator();

const BibleStackNav = () => {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerTitleStyle: {
                        fontFamily: 'Merienda_700Bold',
                    }, 
                    headerLargeTitleStyle: {
                        fontSize: 28,
                        fontFamily: 'Merienda_700Bold',
                    },

                    title: 'La Sainte Bible',
                    headerTintColor: Colors.purple,


                }
            }
        >
            <Stack.Screen name='TopStack' component={TopStackNav}

                options={{
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
                }}
            />
            <Stack.Screen name='PageView' component={PageView}
                options={{
                    headerBackVisible: true,
                    headerBackTitleVisible: false,
                    title: "",
                    gestureEnabled: true,
                    headerRight: () => (
                        <>
                            
                            <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
                                <Item
                                    title="list"
                                    iconName="filter-list-alt"
                                    color={Colors.purple}
                                    onPress={() => alert('Passer en mode pro pour avoir cette fonctionnalité')}
                                    style = {{
                                        marginHorizontal : 5
                                    }}
                                />
                            </HeaderButtons>
                            <HeaderButtons HeaderButtonComponent={CustomHeaderButtomIonicons}>
                                <Item
                                    title="share-outline"
                                    iconName="share-outline"
                                    color={Colors.purple}
                                    onPress={() => alert('Passer en mode pro pour avoir cette fonctionnalité')}
                                    style = {{
                                        marginLeft : 5
                                    }}
                                />
                            </HeaderButtons>
                        </>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default BibleStackNav