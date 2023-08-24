import { Button, Text, View } from 'react-native';
import { useContext } from 'react';
import CounterContext from '../context/CounterContext';

export default function Body() {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <View style={{ alignItems: 'center', marginTop: 8 }}>
      <Text style={{ marginBottom: 32 }}>Body: {counter}</Text>
      <Button title='Increment' onPress={() => setCounter(counter + 1)}></Button>
      <Button title='Decrement' onPress={() => setCounter(counter - 1)}></Button>
    </View>
  );
}
