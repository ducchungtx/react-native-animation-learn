import React, { Component } from 'react';
import { Animated, Text, Easing, View } from 'react-native';

export default class FadeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideAnim1: new Animated.Value(-700),
            slideAnim2: new Animated.Value(-700)
        }
    }
    componentDidMount() {
        const anim1 = Animated.timing(
            this.state.slideAnim1,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.ease
            }
        );

        const anim2 = Animated.timing(
            this.state.slideAnim2,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.ease
            }
        );

        // Chay tuan tu 1 den 2
        // Animated.sequence([anim1, anim2]).start();
        // Chay song song 2 animation
        // Animated.parallel([anim1, anim2]).start();
        // Sau thoi gian bao lau thi load cai tiep theo vi du 5 giay
        Animated.stagger(5000, [anim1, anim2]).start();

    }
    render() {
        const marginLeft1 = this.state.slideAnim1;
        const marginLeft2 = this.state.slideAnim2;
        return (
            <View>
                <Animated.View 
                    style={{
                        width: 300,
                        height: 200,
                        backgroundColor: 'green',
                        marginBottom: 30,
                        marginLeft: marginLeft1
                    }}>
                    <Text>Chung o day</Text>
                </Animated.View>

                <Animated.View 
                    style={{
                        width: 300,
                        height: 200,
                        backgroundColor: 'green',
                        marginLeft: marginLeft2
                    }}>
                    <Text>Chung o day</Text>
                </Animated.View>
            </View>
        );
    }
}