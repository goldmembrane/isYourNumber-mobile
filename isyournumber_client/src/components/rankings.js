// 각 ranking들을 나타낼 rankings component

import React from 'react'
import { View,  StyleSheet } from 'react-native'

// ranking component의 style을 구성할 코드
const rankingsStyles = StyleSheet.create({

    // rankings box style
    rankingsBox: {
        width: 300,
        height: 100,
        backgroundColor: '#2b5876',
        alignSelf: 'center',
        marginTop: 16,
    },
})

// ranking component의 화면을 구성할 코드
const Rankings = () => {
    return(
        <>
            <View style = {rankingsStyles.rankingsBox}>

            </View>
        </>
    )
}

export default Rankings