import { useContext } from 'react';
import { Text, View } from 'react-native';
import CounterContext from '../context/CounterContext';

export default function Title() {
  const { counter } = useContext(CounterContext);
  return (
    <View>
      <Text>Home: {counter}</Text>
    </View>
  );
}
