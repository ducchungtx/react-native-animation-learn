import React, { Component } from 'react';
import { Animated, View } from 'react-native';
import icon from '../media/doreamon.png';

export default class ResponseView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: null, y: null,
            marginLeft: new Animated.Value(0),
            marginTop: new Animated.Value(0),
        }
    }

    onPress(evt) {
        const { locationX, locationY } = evt.nativeEvent;
        this.setState({
            x: locationX,
            y: locationY
        });
        console.log('====================================');
        console.log(locationX, locationY);
        console.log('====================================');
    }

    onMove(evt) {        
        console.log('I am moving');
        const { locationX, locationY } = evt.nativeEvent;
        const { x, y } = this.state;
        const marginLeft = locationX - x;
        const marginTop = locationY - y;
        this.setState({
            marginLeft, marginTop
        });
    }

    onRelease(evt) {
        console.log('Stop moving');
    }
    
    render() {
        const { marginLeft, marginTop } = this.state;
        return (
            <View
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}
                onResponderMove={this.onMove.bind(this)}
                onResponderRelease={this.onRelease.bind(this)}
                onResponderGrant={this.onPress.bind(this)}
                style={{
                    flex: 1,
                    backgroundColor: 'yellow'
                }}
            >
            <Animated.Image
                source={icon}
                style={{ marginLeft, marginTop }}
            />
            </View>
        );
    }
}