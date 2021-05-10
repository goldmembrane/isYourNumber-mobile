// 각 ranking들을 나타낼 rankings component

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// ranking component의 style을 구성할 코드
const rankingsStyles = StyleSheet.create({

    // rankings box style
    rankingsBox: {
        width: 300,
        height: 100,
        backgroundColor: '#2b5876',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },

    // rankings box text style
    rankingsBoxText: {
        fontSize: 45,
        fontWeight: 'bold',
    }
})

// ranking component의 화면을 구성할 코드
const Rankings = (props) => {
    return(
        <>
            <View style = {rankingsStyles.rankingsBox}>
                <Text style = {rankingsStyles.rankingsBoxText}>{props.rank.score}</Text>
            </View>
        </>
    )
}

export default Rankings