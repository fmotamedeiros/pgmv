import { StyleSheet, View, Text } from "react-native";
import { useDisplayContext } from "../context/DisplayContext";

export default function Display() {

  const { displayText } = useDisplayContext();

  return (
    <View style={styles.display}>
      <Text style={styles.text}>{displayText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    width: '100%',
    backgroundColor: '#302926',
    height: 80,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  text: {
    fontSize: 60,
    color: '#fff',
    marginRight: 12
  }
});