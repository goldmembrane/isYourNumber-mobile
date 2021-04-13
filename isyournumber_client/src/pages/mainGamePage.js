// main game이 이루어지는 main game page
import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import { useState } from 'react'
import { TabRouter } from '@react-navigation/routers'

// main game page의 style을 구성할 코드
const mainGamePageStyles = StyleSheet.create({
    // main game time box style
    gameTimerBox: {
        width: 100,
        height: 100,
        backgroundColor: '#00c6fb',
        borderRadius: 10,
        marginTop: 50,
        marginLeft: 20,
    },

    // main game formular box style
    gameFormularBox: {
        width: 250,
        height: 90,
        alignSelf: 'center',
        backgroundColor: '#4fb576',
        marginTop: 150,
    },

    // main game formular box text style
    gameFormularBoxText: {
        fontSize: 34,
        textAlign: 'center',
        lineHeight: 90,
        fontWeight: 'bold'
    },

    // main game select collection box style
    gameSelectButtonCollection: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },

    // main game below box style
    gameAnswerBelowButtonBox: {
        flex: .3,
        backgroundColor: '#453a94',
        height: 200,
    },

    // main game below box test style
    gameAnswerBelowButtonBoxText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
        lineHeight: 200,
    },

    // main game answer box style
    gameAnswerButtonBox: {
        flex: .4,
        backgroundColor: '#e5b2ca',
    },

    // main game answer box text style
    gameAnswerButtonBoxText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
        lineHeight: 200,
    },

    // main game among answer button box
    gameAnswerAmongButtonBox: {
        flex: .3,
        backgroundColor: '#13547a',
    },

    // main game among answer button text box
    gameAnswerAmongButtonBoxText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
        lineHeight: 200,
    },
})

// main game page의 화면을 구성할 코드

const MainGamePage = ({ route }) => {

    // 랜덤으로 formular를 생성하면, 그 formular를 저장하는 state
    const [ formular, setFormular ] = useState('')

    // operator를 지정하는 state
    const [ operator, setOperator ] = useState({
        1: '+', 2: '-',
    })

    // 랜덤으로 formular를 생성하는 함수
    const setRandomFormular = () => {
       const randomFormular = `${Math.floor(Math.random() * 99) + 1}${operator[Math.floor(Math.random() * 2) + 1]}${Math.floor(Math.random() * 99) + 1}${operator[Math.floor(Math.random() * 2) + 1]}${Math.floor(Math.random() * 99) + 1}`

       if ( eval(randomFormular) > route.params.number - 5 && eval(randomFormular) < route.params.number + 5) {
           setFormular(formular + randomFormular)
       }else {
           setRandomFormular()
       }
    }

    // 화면이 처음 렌더링되면 실행하기 위한 hook
    useEffect(() => {
        setRandomFormular()
    },[])

    return (
        <>
            <View style = {mainGamePageStyles.gameTimerBox}></View>
            <View style = {mainGamePageStyles.gameFormularBox}>
                <Text style = {mainGamePageStyles.gameFormularBoxText}>{formular}</Text>
            </View>
            <View style = {mainGamePageStyles.gameSelectButtonCollection}>
                <TouchableOpacity style = {mainGamePageStyles.gameAnswerBelowButtonBox}>
                    <Text style = {mainGamePageStyles.gameAnswerBelowButtonBoxText}>낮다</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {mainGamePageStyles.gameAnswerButtonBox}>
                    <Text style = {mainGamePageStyles.gameAnswerButtonBoxText}>맞다</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {mainGamePageStyles.gameAnswerAmongButtonBox}>
                    <Text style = {mainGamePageStyles.gameAnswerAmongButtonBoxText}>높다</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default MainGamePage