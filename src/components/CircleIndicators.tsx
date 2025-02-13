import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

type CircleIndicatorsProps = {
    length: number;
    index: number;
};

function CircleIndicators({ length, index }: CircleIndicatorsProps) {
    const animatedValues = useRef<Animated.Value[]>(
        Array.from({ length }, () => new Animated.Value(0))
    ).current;

    useEffect(() => {
        animatedValues.forEach((anim, i) => {
            Animated.timing(anim, {
                toValue: i === index ? 1 : 0,
                duration: 200,
                useNativeDriver: false,
            }).start();
        });
    }, [index, animatedValues]);

    return (
        <View style={styles.indicatorContainer}>
            {animatedValues.map((anim, i) => (
                <Animated.View
                    key={i}
                    style={[
                        styles.dot,
                        {
                            width: anim.interpolate({
                                inputRange: [1, 1],
                                outputRange: [8, 8],
                            }),
                            height: anim.interpolate({
                                inputRange: [1, 1],
                                outputRange: [8, 8],
                            }),
                            backgroundColor: anim.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['#ccc', '#024834'],
                            }),
                        },
                    ]}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    dot: {
        borderRadius: 8,
    },
});

export default CircleIndicators;
