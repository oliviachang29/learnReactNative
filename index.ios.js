import React, { Component } from 'react';
import { AppRegistry, Image, View } from 'react-native';

class AwesomePicture extends Component {
  render() {
    let pic = {
      uri: this.props.uri
    }
    return (
        <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

class LotsOfPictures extends Component {
  render(){
    return(
        <View style={{alignItems: 'center'}}>
          <AwesomePicture uri='https://unsplash.it/200/300/?random'/>
          <AwesomePicture uri='https://unsplash.it/200/400/?random'/>
          <AwesomePicture uri='https://unsplash.it/200/500/?random'/>
        </View>
    );
  }
}

AppRegistry.registerComponent('learnReactNative', () => LotsOfPictures);