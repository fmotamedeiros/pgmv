import React from 'react';
import { Text, View } from 'react-native';

const Greeting = (props) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ color: props.color }}>Hello, {props.getUser().name}!</Text>
    </View>
  );
};

const App = () => {
  const getUser = () => {
    return {
      name: 'Rodrigo',
    };
  }

  return (
    <View style={{ alignItems: 'center', top: 50, flex: 1, justifyContent: 'center' }}>
      <Greeting color="orange" getUser={getUser} />
      <Greeting color="purple" getUser={getUser} />
      <Greeting color="blue" getUser={getUser} />
    </View>
  );
};

export default App;