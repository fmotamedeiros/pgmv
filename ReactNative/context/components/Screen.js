import { View } from 'react-native';
import Body from './Body';
import Title from './Title';

export default function Screen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Title></Title>
      <Body></Body>
    </View>
  );
}
