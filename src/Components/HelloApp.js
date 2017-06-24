import React, { Component } from 'react';
import { Animated, Text, Dimensions } from 'react-native';
import backgroundImage from '../media/Religion_0144a.jpg';
import logo from '../media/google-play-music-logo.png';

const { height, width } = Dimensions.get('window');

export default class HelloApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.time,
            {
                toValue: 2,
                duration: 5000
            }
        ).start();
    }
    
    render() {
        const opacity = this.state.time.interpolate({
            inputRange: [0, 2],
            outputRange: [0, 1]
        });

        const marginTop = this.state.time.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [-100, 100, 50]
        });

        const marginLeft = this.state.time.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [-700, -700, 0]
        });

        return (
            <Animated.Image 
                style={{
                    width,
                    height,
                    alignItems: 'center',
                    opacity
                }}
                source={backgroundImage}
            >
                <Animated.Image
                    source={logo}
                    style={{
                        resizeMode: 'center',
                        marginTop
                    }}
                />
                <Animated.Text style={{
                    fontSize: 30,
                    backgroundColor: 'transparent',
                    color: 'white',
                    marginLeft
                }}>
                    CHUNG NGUYEN
                </Animated.Text>
            </Animated.Image>
        );
    }
}