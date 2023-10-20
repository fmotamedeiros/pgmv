import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { Button, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

function Login() {

  const login = () => {
    signInWithEmailAndPassword(auth, 'flavio@gmail.com', 'testes')
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text>Login!</Text>
      <Button title='Entrar' onPress={login}></Button>
      <StatusBar style="auto" />
    </View>
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

export default Login;