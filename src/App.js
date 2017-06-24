import React, { Component } from 'react';
import { View } from 'react-native';
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
                <TransformView />
            </View>
        );
    }
}