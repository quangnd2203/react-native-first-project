import React from 'react';
import { SafeAreaView, StyleSheet, Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import ohdidiLogo from '../../assets/png/ohdidi_logo.png';
import ohdidiLogo from 'assets/png/ohdidi_logo.png';
import { Text } from 'react-native';
import { AppTextStyle } from '~/config';


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
                <Image source={ohdidiLogo} style={{marginBottom: 31}}></Image> 
                <Text style={[AppTextStyle.extraBold, styles.descriptionText]}>
                    Tìm kiếm
                    <Text style={styles.descriptionTextChild}> Cơ sở lưu trú du lịch</Text>
                </Text>
                <Text style={[AppTextStyle.extraBold, styles.descriptionText]}>
                    Cho kì nghỉ của bạn
                </Text>
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
    descriptionText: {
        fontSize: 18,
        color: 'white',
    },
    descriptionTextChild: {
        color: '#83CC20',
    }
});

export default SplashScreen;
