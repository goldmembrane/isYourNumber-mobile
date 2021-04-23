// 랜덤으로 숫자를 지정하고, 숫자가 지정되면 게임 시작 버튼이 활성화되는 페이지
import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet, Easing } from 'react-native'
import { useState } from 'react'
import AnimatedNumbers from 'react-native-animated-numbers'

// setting page의 style을 구성할 코드
const settingPageStyles = StyleSheet.create({

    // random number box style
    randomNumberBox: {
        width: 250,
        height: 80,
        alignSelf: 'center',
        backgroundColor: '#38f9d7',
        marginTop: 200,
        alignItems: 'center',
    },

    // random number box text style
    randomNumberBoxText: {
        fontSize: 30,
        textAlign: 'center',
        lineHeight: 80,
        fontWeight: 'bold',
    },

    // setting number button box style
    setNumberBox:{
        width: 200,
        height: 60,
        alignSelf: 'center',
        backgroundColor: '#fa71cd',
        marginTop: 250,
    },

    // setting number button box text style
    setNumberBoxText:{
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 60,
    },

    // (setting version) invisible game start button box style
    invisibleGameStartButtonBox: {
        width: 0,
        height: 0,
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

    // setting number button을 클릭하면 바뀌는 state
    const [ shown, setShown ] = useState(true)

    // 랜덤으로 숫자를 지정하는 함수
    const setRandomNumber = () => {
        setNumber(number + Math.floor(Math.random() * 90) + 10)
    }

    // setting number button을 클릭하면 shown state를 false로 바꾸는 함수
    const changeToUnShown = () => {
        setShown(false)
    }

    return(
        <>
            <View style = {settingPageStyles.randomNumberBox}>
                    <AnimatedNumbers 
                    animateToNumber = {number}
                    animationDuration = {4000}
                    fontStyle = {{fontSize: 30, fontWeight: 'bold', lineHeight: 80}}/>
            </View>
            <TouchableOpacity style = {shown ? settingPageStyles.setNumberBox : settingPageStyles.invisibleGameStartButtonBox} onPress = {() => {setRandomNumber(); changeToUnShown();}}>
                <Text style = {settingPageStyles.setNumberBoxText}>Set Number!</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {!number ? settingPageStyles.invisibleGameStartButtonBox : settingPageStyles.gameStartButtonBox} onPress = {() => navigation.navigate('Game', {number: number})}>
                <Text style = {settingPageStyles.gameStartButtonBoxText}>Game Start!</Text>
            </TouchableOpacity>
        </>
    )
}

export default SettingPage