// 자신이 그동안 했던 score들을 높은 점수 순위대로 화면에 표시하는 rank page
import React from 'react'
import { View, StyleSheet } from 'react-native'
import Rankings from '../components/rankings'

// rank page의 style을 구성할 코드
const rankPageStyles = StyleSheet.create({

    // rank page box style
    rankPageBox: {
        width: 350,
        height: 600,
        backgroundColor: '#50c9c3',
        alignSelf: 'center',
        marginTop: 100,
    }
})

// rank page의 화면을 구성할 코드
const RankPage = () => {
    return (
        <>
            <View style = {rankPageStyles.rankPageBox}>
                <Rankings />
            </View>
        </>
    )
}

export default RankPage