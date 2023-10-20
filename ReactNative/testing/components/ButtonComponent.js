import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

function ButtonComponent({ onPress, label }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}

export default ButtonComponent;
