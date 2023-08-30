import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

function First() {
  return (
    <View style={styles.container}>
      <Text>First Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function Second() {
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function Third() {
  return (
    <View style={styles.container}>
      <Text>Third Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="First"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="First"
          component={First}
          options={{
            tabBarLabel: 'First',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Second"
          component={Second}
          options={{
            tabBarLabel: 'Second',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="mail" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Third"
          component={Third}
          options={{
            tabBarLabel: 'Third',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;