import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FadeView from './Components/FadeView';
import SlideView from './Components/SlideView';
import TransformView from './Components/TransformView';
import HelloApp from './Components/HelloApp';
import ResponseView from './Components/ResponseView';
import HotGirlView from './Components/HotGirlView';

export default class App extends Component {
    state = {  }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    backgroundColor: 'lightblue' }}
            >
                <HotGirlView />
            </View>
        );
    }
}