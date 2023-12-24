import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import NotificationScreen from '../screens/verset/NotificationScreen';
import VersetScreen from '../screens/verset/VersetScreen';
import {
    HeaderButtons,
    Item,
} from 'react-navigation-header-buttons';
import { MaterialHeaderButton } from '../components/CustomHeaderButton';

const Stack = createNativeStackNavigator();

const VersetStackNav = () => {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerLargeTitle: true,
                    headerLargeTitleStyle: {
                        fontSize: 28,
                    }
                }
            }
        >
            <Stack.Screen name="VersetScreen" component={VersetScreen}
                options={
                    ({ navigation }) => (
                        {
                            tabBarIcon: ({ color, size }) => (
                                <MaterialIcons name="wb-sunny" size={26} color={color} />
                            ),
                            title: "Evanjely masina",

                            headerRight: () => (
                                <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
                                    <Item
                                        title="notifications"
                                        iconName="notifications"
                                        onPress={() => navigation.navigate('NotificationsScreen')}
                                    />
                                </HeaderButtons>
                            )
                        }

                    )
                }
            />
            <Stack.Screen name="NotificationsScreen" component={NotificationScreen} />
        </Stack.Navigator>
    )
}

export default VersetStackNav