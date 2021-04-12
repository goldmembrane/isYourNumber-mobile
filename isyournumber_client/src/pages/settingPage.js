// 랜덤으로 숫자를 지정하고, 숫자가 지정되면 게임 시작 버튼이 활성화되는 페이지
import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'

// setting page의 style을 구성할 코드
const settingPageStyles = StyleSheet.create({

    // random number box style
    randomNumberBox: {
        width: 250,
        height: 80,
        alignSelf: 'center',
        backgroundColor: '#38f9d7',
        marginTop: 200,
    },

    // random number box text style
    randomNumberBoxText: {
        fontSize: 30,
        textAlign: 'center',
        lineHeight: 80,
        fontWeight: 'bold',
    },

    // (setting version) game start button box style
    gameStartButtonBox: {
        width: 200,
        height: 60,
        alignSelf: 'center',
        backgroundColor: '#fa71cd',
        marginTop: 250,
    },

    // (setting version) game start button box text style
    gameStartButtonBoxText: {
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 60,
    }
})

// setting page의 화면을 구성할 코드
const SettingPage = ({ navigation }) => {
    return(
        <>
            <View style = {settingPageStyles.randomNumberBox}>
                <Text style = {settingPageStyles.randomNumberBoxText}>0</Text>
            </View>
            <TouchableOpacity style = {settingPageStyles.gameStartButtonBox} onPress = {() => navigation.navigate('Game')}>
                <Text style = {settingPageStyles.gameStartButtonBoxText}>Game Start!</Text>
            </TouchableOpacity>
        </>
    )
}

export default SettingPage