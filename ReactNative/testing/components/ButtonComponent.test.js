import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonComponent from './ButtonComponent';

test('button press invokes onPress prop', () => {
  const onPressMock = jest.fn();  // Criando a função mock
  const { getByText } = render(<ButtonComponent onPress={onPressMock} label="Click me" />);
  
  fireEvent.press(getByText('Click me'));  // Simulando o pressionamento do botão
  
  expect(onPressMock).toHaveBeenCalled();  // Verificando se a função mock foi chamada
});
