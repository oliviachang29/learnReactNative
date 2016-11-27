import React, {Component} from 'react';
import { AppRegistry, View } from 'react-native';

class JustifyContentBasics extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row'
                /*justifyContent: 'space-between'*/
            }}>
                <View style={{flex: 1, height: 40, backgroundColor: 'powderblue'}} />
                <View style={{flex: 1, height: 80, backgroundColor: 'skyblue'}} />
                <View style={{flex: 1, height: 120, backgroundColor: 'steelblue'}} />
                <View style={{flex: 1, height: 80, backgroundColor: 'skyblue'}} />
                <View style={{flex: 1, height: 40, backgroundColor: 'powderblue'}} />
            </View>
        );
    }
};

AppRegistry.registerComponent('learnReactNative', () => JustifyContentBasics)