import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import BibleStackNav from './BibleStackNav';
import OptionsStackNav from './OptionsStackNav';
import VersetStackNav from './VersetStackNav';
import { Colors } from '../Colors/Colors';


const Tab = createBottomTabNavigator();

const BottomTabs = ({ navigation }) => {
    return (
        <Tab.Navigator
            screenOptions={
                {
                    headerShown: false,
                }
            }
        >
            <Tab.Screen name="Bible" component={BibleStackNav}
                options={{
                    tabBarActiveTintColor : Colors.purple ,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="menu-book" size={24} color={color} />
                    ),
                }}
            />

            <Tab.Screen name="Versets" component={VersetStackNav}
                options={{
                    tabBarActiveTintColor : Colors.purple ,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="wb-sunny" size={24} color={color} />
                    ),

                }}

            />
            <Tab.Screen name="Options" component={OptionsStackNav}
                options={{
                    tabBarActiveTintColor : Colors.purple ,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="settings" size={24} color={color} />
                    ),
                }}

            />
        </Tab.Navigator>
    );
}
export default BottomTabs
