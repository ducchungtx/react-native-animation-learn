import React, { Component } from 'react';
import { Animated, Text, Easing, View } from 'react-native';

export default class TransformView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorAnim: new Animated.Value(0),
            transform: new Animated.Value(0),
        }
    }
    componentDidMount() {        
        // const anim1 = Animated.timing(
        //     this.state.colorAnim,
        //     {
        //         toValue: 1,
        //         duration: 1000
        //     }
        // );

        // const anim2 = Animated.timing(
        //     this.state.colorAnim,
        //     {
        //         toValue: 0,
        //         duration: 1000
        //     }
        // );
        // const finalAnim = Animated.sequence([anim1, anim2]);

        const anim1 = Animated.timing(
            this.state.transform,
            {
                toValue: 1,
                duration: 1000
            }
        );

        const anim2 = Animated.timing(
            this.state.transform,
            {
                toValue: 0,
                duration: 1000
            }
        );
        const finalAnim = Animated.sequence([anim1, anim2]);

        // Chay vong lap hien thi thay doi lien tuc
        Animated.loop(finalAnim).start();
    }

    render() {
        // const backgroundColor = this.state.colorAnim.interpolate({
        //     inputRange: [0, 0.5, 1],
        //     outputRange: [ 'green', 'red', 'yellow' ]
        // });
        const rotate = this.state.transform.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['15deg', '0deg', '-15deg']
        });
        return (
            <View>
                <Animated.View 
                    style={{
                        width: 300,
                        height: 200,
                        backgroundColor: 'green',
                        marginBottom: 30,
                        transform: [ { rotate }, { rotateY: rotate } ]
                    }}>
                    
                </Animated.View>

                
            </View>
        );
    }
}