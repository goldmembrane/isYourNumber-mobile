// main game에서 게임이 끝날 때 화면에 표시되는 game over page

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// game over page의 style을 구성할 코드
const gameOverPageStyles = StyleSheet.create({
    
    // game over를 표시할 box style
    gameOverBox: {
        width: 250,
        height: 90,
        marginTop: 250,
        backgroundColor: '#74ebd5',
        alignSelf: 'center'
    },

    // game over를 표시할 box text style
    gameOverBoxText: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        lineHeight: 90,
    },

    // score box style
    gameScoreBox: {
        width: 180,
        height: 60,
        marginTop: 50,
        alignSelf: 'center',
    },

    // score box text style
    gameScoreBoxText: {
        fontSize: 26,
        textAlign: 'center',
        lineHeight: 60,
    },

    // save score button box style
    saveScoreButtonBox: {
        width: 175,
        height: 60,
        marginTop: 50,
        alignSelf: 'center',
        backgroundColor: '#b1f4cf',
    },

    // save score button box text style
    saveScoreButtonBoxText: {
        fontSize: 28,
        textAlign: 'center',
        lineHeight: 60,
    },

    // return to home button box style
    returnToHomeButtonBox: {
        width: 175,
        height: 60,
        marginTop: 50,
        alignSelf: 'center',
        backgroundColor: '#fa709a',
    },

    // return to home button box text style
    returnToHomeButtonBoxText: {
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 60,
    }
})

// game over page의 화면을 구성할 코드
const GameoverPage = () => {
    return(
        <>
            <View style = {gameOverPageStyles.gameOverBox}>
                <Text style = {gameOverPageStyles.gameOverBoxText}>Game Over!</Text>
            </View>
            <View style = {gameOverPageStyles.gameScoreBox}>
                <Text style = {gameOverPageStyles.gameScoreBoxText}>Score : </Text>
            </View>
            <TouchableOpacity style = {gameOverPageStyles.saveScoreButtonBox}>
                <Text style = {gameOverPageStyles.saveScoreButtonBoxText}>Save Score</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {gameOverPageStyles.returnToHomeButtonBox}>
                <Text style = {gameOverPageStyles.returnToHomeButtonBoxText}>Return to Home</Text>
            </TouchableOpacity>
        </>
    )
}

export default GameoverPage