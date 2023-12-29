import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewTestament from '../screens/bible/NewTestament'
import OldTestament from '../screens/bible/OldTestament' 
import { Colors } from '../Colors/Colors';

const Tab = createMaterialTopTabNavigator();

export const TopStackNav = () => {
  return ( 
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle  : {
            backgroundColor : Colors.purple
          }
        }}
      >
        <Tab.Screen name="newTestament" component={NewTestament} options={{
          title : "Nouveau Testament" , 
          tabBarLabelStyle : { 
            fontStyle : 'italic'
          } ,
          tabBarActiveTintColor : Colors.purple ,
          tabBarInactiveTintColor : Colors.grey
          
        }}/>
        <Tab.Screen name="oldTestament" component={OldTestament} options={{
          title : "Ancien Testament" , 
          tabBarLabelStyle : {
            fontStyle : 'italic'
          },
          tabBarActiveTintColor : Colors.purple,
          tabBarInactiveTintColor : Colors.grey
        }}/>
      </Tab.Navigator> 
  );
}