import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChapitresScreen from '../screens/bible/ChapitresScreen'
import NoteScreen from '../screens/bible/NotesScreen'

const Tab = createMaterialTopTabNavigator();

export const TopStackNav = ()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chapitres" component={ChapitresScreen}/>
      <Tab.Screen name="Settings" component={NoteScreen} />
    </Tab.Navigator>
  );
}