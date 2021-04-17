// 자신이 그동안 했던 score들을 높은 점수 순위대로 화면에 표시하는 rank page
import React from 'react'
import { View, StyleSheet } from 'react-native'
import Rankings from '../components/rankings'
import { useState, useEffect } from 'react'
import axios from 'axios'

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

    // rank를 받아오기 위한 state
    const [data, setData] = useState([])

    // rank를 받기 위한 함수
    const getRanks = async () => {
        await axios.get('http://localhost:7500/rank').then(response => {
            console.log(response.data)
            setData(data.concat(response.data))
        })
    }

    // 받아온 ranks 수만큼 화면에 표시하는 map 함수
    const manyRankings = data.map((rank, i) => (
        <Rankings key = {i} rank = {rank}/>
    ))

    useEffect(() => {
        getRanks()
    }, [])
    return (
        <>
            <View style = {rankPageStyles.rankPageBox}>
                {manyRankings}
            </View>
        </>
    )
}

export default RankPage