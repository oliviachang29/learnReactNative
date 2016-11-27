import React, {Component} from 'react';
import { AppRegistry, Text, TextInput, ScrollView } from 'react-native';

class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding:10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && 'pizza!').join(' ')}
                </Text>
            </ScrollView>

        );
    }
}

AppRegistry.registerComponent('learnReactNative', () => PizzaTranslator)