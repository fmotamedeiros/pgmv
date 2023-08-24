import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    storeData({
      name: 'Flávio Medeiros',
      id: '238fahy37sf4gsddg'
    });
  }, []);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user !== null) {
        setUser(JSON.parse(user));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      {user && <Text>{user.name}</Text>}
      <Button title='Read Storage' onPress={() => getData()}></Button>
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
