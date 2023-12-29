import { StatusBar } from 'expo-status-bar';
import store from './redux/Store';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabs from './routes/BottomStackNAvigation';
import AppLoading from 'expo-app-loading';
import { useFonts, GreatVibes_400Regular } from '@expo-google-fonts/great-vibes';
import { Acme_400Regular } from '@expo-google-fonts/acme';
import { Merienda_700Bold } from '@expo-google-fonts/merienda';


export default function App() {
  let [fontsLoaded] = useFonts({
    greetVibesRegular: GreatVibes_400Regular,
    Merienda_700Bold: Merienda_700Bold,
    Acme_400Regular: Acme_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar />
          <BottomTabs />
        </NavigationContainer>
      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
