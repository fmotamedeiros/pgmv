import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

function Login() {

  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Login!</Text>
      <Button title='Entrar' onPress={() => navigator.replace('Home', {
        user: 'Flávio Medeiros',
      })}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function Home() {
  const navigator = useNavigation();
  const router = useRoute();

  const { user } = router.params;

  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      <Text>{user}</Text>
      <Button title='Sair' onPress={() => navigator.replace('Login')}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
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

export default App;