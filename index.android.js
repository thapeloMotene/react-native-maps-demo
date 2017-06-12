

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import MapView from 'react-native-maps';

export default class maps extends Component {
  render() {
    return (
     
        <MapView style={styles.map} initialRegion={{
              latitude: -25.9992 ,
              longitude:28.1263,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
             <MapView.Marker
      coordinate={{
                  latitude: -25.9992,
                  longitude:28.1263
      }}
      title={"First Pin"}
      description={"First Pin Description"}
    />
        </MapView>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
  
});

AppRegistry.registerComponent('maps', () => maps);
