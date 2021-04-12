// 랜덤으로 숫자를 지정하고, 숫자가 지정되면 게임 시작 버튼이 활성화되는 페이지
import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'

// setting page의 style을 구성할 코드

// setting page의 화면을 구성할 코드
const SettingPage = () => {
    return(
        <>
            <View>
                <Text>0</Text>
            </View>
            <TouchableOpacity>
                <Text>Game Start!</Text>
            </TouchableOpacity>
        </>
    )
}

export default SettingPage