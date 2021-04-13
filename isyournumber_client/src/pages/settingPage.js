// 랜덤으로 숫자를 지정하고, 숫자가 지정되면 게임 시작 버튼이 활성화되는 페이지
import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import { useState } from 'react'

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

    // 랜덤으로 숫자를 지정하면 그 숫자를 저장하는 state
    const [ number, setNumber ] = useState(0)

    // 랜덤으로 숫자를 지정하는 함수
    const setRandomNumber = () => {
        setNumber(number + Math.floor(Math.random() * 90 ) + 10)
    }

    // 화면이 처음 렌더링되면 setRandomNumber를 실행시키는 hooks
    useEffect(() => {
        setRandomNumber()
    }, [])
    return(
        <>
            <View style = {settingPageStyles.randomNumberBox}>
                <Text style = {settingPageStyles.randomNumberBoxText}>{number}</Text>
            </View>
            <TouchableOpacity style = {settingPageStyles.gameStartButtonBox} onPress = {() => navigation.navigate('Game', {number: number})}>
                <Text style = {settingPageStyles.gameStartButtonBoxText}>Game Start!</Text>
            </TouchableOpacity>
        </>
    )
}

export default SettingPage