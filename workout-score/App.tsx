import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './src/screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// <SafeAreaProvider>
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name='Home' component={HomeScreen} />
      //     <Stack.Screen name="Setting" component={SettingScreen} />
      //   </Stack.Navigator>
      // </NavigationContainer>
//       <StatusBar barStyle="dark-content" />
//       {/* <View style={styles.container}>
//         <Text>Open up App.tsx to start working on your app!</Text>
//       </View> */}
//     </SafeAreaProvider>