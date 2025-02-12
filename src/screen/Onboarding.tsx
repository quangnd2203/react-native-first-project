import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import onboardingImage1 from 'assets/png/onboarding_1.png';
import onboardingImage2 from 'assets/png/onboarding_2.png';
import onboardingImage3 from 'assets/png/onboarding_3.png';
import { AppColors, AppTextStyle } from '~/config';
import { CircleIndicators } from '~/components';

const { width } = Dimensions.get('window');

const onboardingData = [
    {
        index: 0,
        image: onboardingImage1,
        title: 'Ứng dụng đặt phòng chỉ với một chạm'
    },
    {
        index: 1,
        image: onboardingImage2,
        title: 'Lựa chọn nơi lưu trú bạn muốn với hơn 1000 cơ sở tin cậy'
    },
    {
        index: 2,
        image: onboardingImage3,
        title: 'Ưu đãi độc quyền dành riêng cho app. Đặt phòng tận hưởng kỳ nghỉ ngay!'
    }
];

function OnboardingScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SkipButton />
            <OnBoardingView />
            <CircleIndicators length={4} index={0} />
        </SafeAreaView>
    );
}

function SkipButton() {
    return (
        <View style={styles.skipButtonContainer}>
            <TouchableOpacity onPress={() => console.log('Pressed!')}>
                <Text style={styles.skipButton}>Bỏ qua</Text>
            </TouchableOpacity>
        </View>
    );
}

function OnBoardingView() {
    return (
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
            {onboardingData.map((item, index) => (
                <View key={index} style={styles.page}>
                    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                        <Image source={item.image} />
                    </View>
                    <View>
                        <Text style={styles.contentTitle}>{item.title}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    skipButtonContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'flex-end'
    },
    skipButton: StyleSheet.flatten([
        AppTextStyle.semibold,
        {
            fontSize: 12,
            color: AppColors.primary
        }
    ]),
    page: {
        flex: 1,
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentTitle: StyleSheet.flatten([
        AppTextStyle.extraBold,
        {
            fontSize: 24,
            color: AppColors.textBlack,
            textAlign: 'center',
            paddingHorizontal: 24,
        }
    ])
});

export default OnboardingScreen;
