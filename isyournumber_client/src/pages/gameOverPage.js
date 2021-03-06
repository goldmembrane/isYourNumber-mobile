// main game에서 게임이 끝날 때 화면에 표시되는 game over page

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useState } from 'react'

// game over page의 style을 구성할 코드
const gameOverPageStyles = StyleSheet.create({
    
    // game over를 표시할 box style
    gameOverBox: {
        width: 250,
        height: 90,
        marginTop: 200,
        backgroundColor: '#74ebd5',
        alignSelf: 'center',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // game over를 표시할 box text style
    gameOverBoxText: {
        fontSize: 36,
        fontWeight: 'bold',
    },

    // score box style
    gameScoreBox: {
        width: 180,
        height: 60,
        marginTop: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // score box text style
    gameScoreBoxText: {
        fontSize: 26,
        color: '#0ba360',
    },

    // save score button box style
    saveScoreButtonBox: {
        width: 225,
        height: 60,
        marginTop: 80,
        alignSelf: 'center',
        backgroundColor: '#b1f4cf',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // save score button box text style
    saveScoreButtonBoxText: {
        fontSize: 22,
        fontWeight: '600',
    },

    // save score button box style if shown state is false
    noShownSaveScoreButtonBox: {
        width: 0,
        height: 0,
    },

    // return to home button box style
    returnToHomeButtonBox: {
        width: 225,
        height: 60,
        marginTop: 80,
        alignSelf: 'center',
        backgroundColor: '#fa709a',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // return to home button box text style
    returnToHomeButtonBoxText: {
        fontSize: 20,
    },

    // return to home button box style if shown is false
    noShownReturnToHomeButtonBox: {
        width: 0,
        height: 0,
    }
})

// game over page의 화면을 구성할 코드
const GameoverPage = ({ navigation, route }) => {

    // 버튼을 활성, 비활성을 결정하는 state
    const [ shown, setShown ] = useState(false)

    // 버튼을 활성한다고 state를 변경하는 함수
    const changeToShown = () => {
        setShown(true)
    }

    // 버튼을 누르면 현재 score를 server에 저장하는 함수
    const saveScore = () => {
        fetch('http://3.34.95.28:7500/rank', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                score: route.params.score,
            }),
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    }

    return(
        <>
            <View style = {gameOverPageStyles.gameOverBox}>
                <Text style = {gameOverPageStyles.gameOverBoxText}>Game Over!</Text>
            </View>
            <View style = {gameOverPageStyles.gameScoreBox}>
                <Text style = {gameOverPageStyles.gameScoreBoxText}>Score : {route.params.score}</Text>
            </View>
            <TouchableOpacity style = {!shown ? gameOverPageStyles.saveScoreButtonBox : gameOverPageStyles.noShownSaveScoreButtonBox} onPress = {() => {saveScore(); changeToShown();}}>
                <Text style = {gameOverPageStyles.saveScoreButtonBoxText}>Save Score</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {shown ? gameOverPageStyles.returnToHomeButtonBox : gameOverPageStyles.noShownReturnToHomeButtonBox} onPress = {() => navigation.navigate('Title')}>
                <Text style = {gameOverPageStyles.returnToHomeButtonBoxText}>Return to Home</Text>
            </TouchableOpacity>
        </>
    )
}

export default GameoverPage