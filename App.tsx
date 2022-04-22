import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import Stock from './components/Stock.tsx';
import warehouse from './assets/warehouse.jpg';
// import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.base}>
        <Text style={styles.heading}>Lager-Appen</Text>
        <Image source={warehouse} style={styles.image} />
        <Stock />
        <Text style={styles.footer}>Freja 2022 - BTH</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: '#fff',
    fontSize: 42,
    paddingBottom: 24,
    paddingTop: 24,
    fontFamily: 'Anton_400Regular',
    textShadowColor: '#000',
    textShadowRadius: 10,
    textShadowOffset: { width: 2, height: 2 },
  },
  image: {
    width: 300,
    height: 180,
    borderRadius: 10,
  },
  container: {
    flex: 1,
  },
  base: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#2E4052',
    paddingLeft: 12,
    paddingRight: 12,
  },
  footer: {
    color: '#BDD9BF',
    paddingTop: 18,
  }
});
