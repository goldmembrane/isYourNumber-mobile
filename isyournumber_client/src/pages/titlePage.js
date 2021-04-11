// 앱을 실행할 때, 제일 먼저 화면에 표시될 page
import React from 'react'
import { View, Text, TouchableOpacity ,StyleSheet } from 'react-native'

// title page의 style을 구성할 코드

// title page의 화면을 구성할 코드
const TitlePage = ({navigation}) => {
    return (
        <>
            {/* game title box */}
            <View>
                <Text>Is Your Number?</Text>
            </View>
            {/* game start button box */}
            <TouchableOpacity>
                <Text>START</Text>
            </TouchableOpacity>
            {/* show game ranks button box */}
            <TouchableOpacity>
                <Text>Ranks</Text>
            </TouchableOpacity>
        </>
    )
}

export default TitlePage