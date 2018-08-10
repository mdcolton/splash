import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30,
  },
});

const listItem = props => (
  <TouchableOpacity onPress={props.itemPressed}>
    <View style={styles.listItem}>
      <Image source={props.placeImage} resizeMode="cover" style={styles.placeImage}/>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);



export default listItem;
