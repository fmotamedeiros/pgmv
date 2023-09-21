import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export default function App() {
  const [location, setLocation] = useState(null);

  const markers = [
    {
      latitude: 37.785834,
      longitude: -122.406417,
      title: 'Marker 01',
      description: 'Marker 01'
    },
    {
      latitude: 37.779914520701084,
      longitude: -122.40168955813957,
      title: 'Marker 02',
      description: 'Marker 02'
    }
  ];

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0121,
      });
    })();
  }, []);

  if (!location) {
    return (<ActivityIndicator></ActivityIndicator>);
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={location} onPress={(event) => console.log(event.nativeEvent.coordinate)}>
        {
          markers.map((marker) => (
            <Marker
              key={marker.title}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude
              }}
              title={marker.title}
              description={marker.description}
            />
          ))
        }
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
