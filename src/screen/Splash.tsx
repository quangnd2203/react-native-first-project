import React from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import ohdidiLogo from '../../assets/png/ohdidi_logo.png';
import ohdidiLogo from 'assets/png/ohdidi_logo.png';


function SplashScreen() {
    return (
        <LinearGradient 
            start={{x: 0.5, y: 0}} 
            end={{x: 0.5, y: 1}} 
            colors={['#83CC20', '#024834']}
            locations={[0, 0.5404]}
            style={styles.linearGradient}
        >
            <SafeAreaView style={styles.centerItem}>
                <Image source={ohdidiLogo}></Image>
            </SafeAreaView>
        </LinearGradient>
    );
}

var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    centerItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

export default SplashScreen;
