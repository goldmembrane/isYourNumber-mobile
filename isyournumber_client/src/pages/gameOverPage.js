// main game에서 게임이 끝날 때 화면에 표시되는 game over page

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// game over page의 style을 구성할 코드

// game over page의 화면을 구성할 코드
const GameoverPage = () => {
    return(
        <>
            <View>
                <Text>Game Over!</Text>
            </View>
            <View>
                <Text>Score : </Text>
            </View>
            <TouchableOpacity>
                <Text>Save Score</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>return to Home</Text>
            </TouchableOpacity>
        </>
    )
}

export default GameoverPage