import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import NotificationScreen from '../screens/verset/NotificationScreen';
import VersetScreen from '../screens/verset/VersetScreen';
import {
    HeaderButtons,
    Item,
} from 'react-navigation-header-buttons';
import { MaterialHeaderButton } from '../components/CustomHeaderButton';
import { Colors } from '../Colors/Colors';

const Stack = createNativeStackNavigator();

const VersetStackNav = () => {
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
                                        color={Colors.purple}
                                        onPress={() => navigation.navigate('NotificationsScreen')}
                                    />
                                </HeaderButtons>
                            )
                        }

                    )
                }
            />
            <Stack.Screen name="NotificationsScreen" component={NotificationScreen} options={{
                title : "Notifications"
            }} />
        </Stack.Navigator>
    )
}

export default VersetStackNav