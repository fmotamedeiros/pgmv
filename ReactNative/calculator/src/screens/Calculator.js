import { StyleSheet, View } from "react-native";
import Display from "../components/Display";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";

export default function Calculator() {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <Display></Display>
        <View style={{flexDirection: 'row'}}>
          <Button text="AC" bgColor="#443E3B"></Button>
          <Button text="+/-" bgColor="#443E3B"></Button>
          <Button text="%" bgColor="#443E3B"></Button>
          <Button text="/" bgColor="#FF9F0B"></Button>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button text="7" bgColor="#635E5C"></Button>
          <Button text="8" bgColor="#635E5C"></Button>
          <Button text="9" bgColor="#635E5C"></Button>
          <Button text="X" bgColor="#FF9F0B"></Button>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button text="4" bgColor="#635E5C"></Button>
          <Button text="5" bgColor="#635E5C"></Button>
          <Button text="6" bgColor="#635E5C"></Button>
          <Button text="-" bgColor="#FF9F0B"></Button>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button text="1" bgColor="#635E5C"></Button>
          <Button text="2" bgColor="#635E5C"></Button>
          <Button text="3" bgColor="#635E5C"></Button>
          <Button text="+" bgColor="#FF9F0B"></Button>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button text="0" bgColor="#635E5C" width="50%"></Button>
          <Button text="," bgColor="#635E5C"></Button>
          <Button text="=" bgColor="#FF9F0B"></Button>
        </View>
        <StatusBar style="dark" backgroundColor="#302926" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});