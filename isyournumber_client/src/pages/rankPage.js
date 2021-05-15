// 자신이 그동안 했던 score들을 높은 점수 순위대로 화면에 표시하는 rank page
import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Rankings from '../components/rankings'
import { useState, useEffect } from 'react'
import * as get from '../modules/get'

// rank page의 style을 구성할 코드
const rankPageStyles = StyleSheet.create({

    goBackBox: {
        width: 150,
        height: 100,
        backgroundColor: '#0fd850',
        marginTop: 50,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    goBackBoxText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    // rank page box style
    rankPageBox: {
        width: 350,
        height: 600,
        backgroundColor: '#50c9c3',
        alignSelf: 'center',
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

// rank page의 화면을 구성할 코드
const RankPage = ({ navigation }) => {

    // rank를 받아오기 위한 state
    const [data, setData] = useState([])

    // rank를 받기 위한 함수
    const getRanks = async () => {
        
        const ranks = await get.getRanks()

        setData(ranks.data)
    }

    // 뒤로 가기 버튼을 누르면 받은 ranks를 초기화하는 함수
    const resetRanks = () => {
        setData([])
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
            <TouchableOpacity style = {rankPageStyles.goBackBox} onPress = {() => {resetRanks(); navigation.navigate('Title');}}>
                <Text style = {rankPageStyles.goBackBoxText}>뒤로가기</Text>
            </TouchableOpacity>
            <View style = {rankPageStyles.rankPageBox}>
                {manyRankings}
            </View>
        </>
    )
}

export default RankPage