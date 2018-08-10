import React, { Component } from 'react';
import { Text, View, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import MainText from '../../components/UI/MainText/MainText';
import DefaultHeading from '../../components/UI/DefaultHeading/DefaultHeading';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

class SharePlaceScreen extends Component {
  state = {
    placeName: ""
  };

  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left',
        });
      }
    }
  }

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  }


  placeAddedHandler = () => {
    if ( this.state.placeName.trim() !== ""){
      this.props.onAddPlace(this.state.placeName)
    }
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.conatiner}>
          <MainText><DefaultHeading>Share a place with us!</DefaultHeading></MainText>
          <PickImage />
          <PickLocation />
          <PlaceInput placeName={this.state.placeName} onChangeText={this.placeNameChangeHandler}/>
          <View style={styles.button}>
            <Button title="Share Place" onPress={this.placeAddedHandler}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    margin: 8,
  },
  placeHolder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150,
  },
  previewImage: {
    width: "100%",
    height: "100%",
  }
});

mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
