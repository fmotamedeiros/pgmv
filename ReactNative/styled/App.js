import React from 'react';
import styled from 'styled-components/native';

// Criação de um componente estilizado
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: #008CBA;
  padding: 10px 20px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

const App = () => {
  return (
    <Container>
      <StyledButton onPress={() => alert('Button Pressed')}>
        <ButtonText>
          Press me
        </ButtonText>
      </StyledButton>
    </Container>
  );
};

export default App;
