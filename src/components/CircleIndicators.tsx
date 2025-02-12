import { StyleSheet, View } from "react-native";

type CircleIndicatorsProps = {
    length: number;
    index: number;
};

function CircleIndicators(props: CircleIndicatorsProps) {
    return (
        <View style={styles.indicatorContainer}>
            {Array.from({ length: props.length }).map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.dot,
                        props.index === index && styles.activeDot,
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
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#ccc',
    },
    activeDot: {
        backgroundColor: '#007BFF',
        width: 16,
        height: 16,
        borderRadius: 8,
    },
});

export default CircleIndicators;