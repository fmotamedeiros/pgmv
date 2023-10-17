import { SafeAreaProvider } from "react-native-safe-area-context";
import Calculator from "./src/screens/Calculator";
import { DisplayContextProvider } from "./src/context/DisplayContext";

export default function App() {
  return (
    <DisplayContextProvider>
      <SafeAreaProvider>
        <Calculator></Calculator>
      </SafeAreaProvider>
    </DisplayContextProvider>
  );
}