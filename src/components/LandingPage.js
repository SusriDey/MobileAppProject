import React from 'react';
import {ImageBackground, StyleSheet, Text, Image, View} from 'react-native';

const image = {
  uri: 'https://account-line.com/wp-content/uploads/2021/01/2-1.jpg',
};

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Simplified Customer Experience</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 35,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
