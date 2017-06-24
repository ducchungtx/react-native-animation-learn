import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FadeView from './Components/FadeView';
import SlideView from './Components/SlideView';
import TransformView from './Components/TransformView';

export default class App extends Component {
    state = {  }
    render() {
        return (
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}
            >
                {/*<TransformView />*/}
                <TransformView style={{ backgroundColor: 'yellow' }}>
                    <Text style={{ fontSize: 40 }}>Chung den roi</Text>
                </TransformView>

                <TransformView style={{ backgroundColor: 'white', height: 100 }}>
                    <Text style={{ fontSize: 40 }}>React Native</Text>
                </TransformView>
            </View>
        );
    }
}