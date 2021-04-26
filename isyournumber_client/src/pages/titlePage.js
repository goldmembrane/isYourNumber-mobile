// 앱을 실행할 때, 제일 먼저 화면에 표시될 page
import React from 'react'
import { View, Text, TouchableOpacity ,StyleSheet } from 'react-native'
import { useSpring, animated } from 'react-spring'


// title에 animation을 연결하는 코드
const AnimatedView = animated(View)


// title page의 style을 구성할 코드
const titlePageStyles = StyleSheet.create({

    // title box style
    titleBox: {
        width: 300,
        height: 80,
        alignSelf: 'center',
        backgroundColor: '#a1c4fd',
        marginTop: 175,
        borderRadius: 15,
    },

    // title box text style
    titleBoxText: {
        fontSize: 30,
        textAlign: 'center',
        lineHeight: 80,
        fontWeight: 'bold',
    },

    // game start button box style
    startGameButtonBox: {
        width: 200,
        height: 60,
        alignSelf: 'center',
        backgroundColor: '#8fd3f4',
        marginTop: 200,
        borderRadius: 10,
    },

    // game start button text style
    startGameButtonBoxText: {
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 60,
    },

    // show ranks button box style
    rankButtonBox: {
        width: 200,
        height: 60,
        alignSelf: 'center',
        backgroundColor: '#f68084',
        marginTop: 30,
        borderRadius: 10,
    },

    // show ranks button text style
    rankButtonBoxText: {
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 60,
    }
})


// title page의 화면을 구성할 코드
const TitlePage = ({navigation}) => {

    // title에 animation을 부여하는 코드
    const titleAnimate = useSpring({
        opacity: 1,
        from: {opacity: 0},
        config: {duration: 2000},
    })

    // start button에 animation을 부여하는 코드
    const startButtonAnimate = useSpring({
        opacity: 1,
        from: {opacity: 0},
        delay: 1500,
    })

    // rank button에 animation을 부여하는 코드
    const rankButtonAnimate = useSpring({
        opacity: 1,
        from: {opacity: 0},
        delay: 2000,
    })

    return (
        <>
            {/* game title box */}
            <AnimatedView style = {titleAnimate}>
                <View style = {titlePageStyles.titleBox}>
                    <Text style = {titlePageStyles.titleBoxText}>
                        Is Your Number?
                    </Text>
                </View>
            </AnimatedView>
            {/* game start button box */}
            <AnimatedView style = {startButtonAnimate}>
                <TouchableOpacity style = {titlePageStyles.startGameButtonBox} onPress = {() => navigation.navigate('Setting')}>
                    <Text style = {titlePageStyles.startGameButtonBoxText}>START</Text>
                </TouchableOpacity>
            </AnimatedView>
            {/* show game ranks button box */}
            <AnimatedView style = {rankButtonAnimate}>
                <TouchableOpacity style = {titlePageStyles.rankButtonBox} onPress = {() => navigation.navigate('Rank')}>
                    <Text style = {titlePageStyles.rankButtonBoxText}>Ranks</Text>
                </TouchableOpacity>
            </AnimatedView>
        </>
    )
}

export default TitlePage