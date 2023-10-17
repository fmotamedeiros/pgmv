import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDisplayContext } from "../context/DisplayContext";

export default function Button(props) {

  const { displayText, setDisplayText } = useDisplayContext();

  const buttonPressed = () => {
    if (props.text === 'AC') return setDisplayText('0');
    
    if (props.text === '='){
      const text = displayText.replaceAll('X', '*');
      return setDisplayText(eval(text));
    } 
    
    if (displayText === '0'){
      return setDisplayText(props.text);
    } else {
      return setDisplayText(displayText + props.text);
    }
  }

  return (
    <TouchableOpacity onPress={buttonPressed} style={[styles.button, { backgroundColor: props.bgColor, width: props.width ? props.width : '25%' }]}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.25,
    borderColor: '#000'
  },
  text: {
    fontSize: 32,
    color: '#fff',
  }
});