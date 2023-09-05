import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function App() {

  const markers = [
    {
      id: 1,
      coordinate: {
        latitude: 37.79808978169713,
        longitude: -122.42340426711066,
      },
      title: 'Título do Local',
      description: 'Descrição do Local'
    },
    {
      id: 2,
      coordinate: {
        latitude: 37.788258441405745,
        longitude: -122.4464157234295,
      },
      title: 'Título do Local',
      description: 'Descrição do Local'
    }
  ];

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        onPress={(event) => { console.log(event.nativeEvent.coordinate) }}
        initialRegion={{
          latitude: 37.800000,
          longitude: -122.440000,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {
          markers && markers.map(marker => {
            return <Marker
              key={marker.id}
              coordinate={{
                latitude: marker.coordinate.latitude,
                longitude: marker.coordinate.longitude,
              }}
              title={`${marker.title} (${marker.id})`}
              description={`${marker.description} (${marker.id})`}
            />
          })
        }
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});