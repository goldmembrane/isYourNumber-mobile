// 앱을 실행할 때, 제일 먼저 화면에 표시될 page
import React from 'react'
import { View, Text, TouchableOpacity ,StyleSheet } from 'react-native'

// title page의 style을 구성할 코드
const titlePageStyles = StyleSheet.create({

    // title box style
    titleBox: {
        width: 300,
        height: 80,
        alignSelf: 'center',
        backgroundColor: '#a1c4fd',
        marginTop: 150,
    },

    // title box text style
    titleBoxText: {
        fontSize: 30,
        textAlign: 'center',
        lineHeight: 80,
        fontWeight: 'bold',
    },

    // game start button box style
    startGameButtonBox: {
        width: 200,
        height: 60,
        alignSelf: 'center',
        backgroundColor: '#8fd3f4',
        marginTop: 200,
    },

    // game start button text style
    startGameButtonBoxText: {
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 60,
    },

    // show ranks button box style
    rankButtonBox: {
        width: 200,
        height: 60,
        alignSelf: 'center',
        backgroundColor: '#f68084',
        marginTop: 30,
    },

    // show ranks button text style
    rankButtonBoxText: {
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 60,
    }
})

// title page의 화면을 구성할 코드
const TitlePage = ({navigation}) => {
    return (
        <>
            {/* game title box */}
            <View style = {titlePageStyles.titleBox}>
                <Text style = {titlePageStyles.titleBoxText}>Is Your Number?</Text>
            </View>
            {/* game start button box */}
            <TouchableOpacity style = {titlePageStyles.startGameButtonBox} onPress = {() => navigation.navigate('Setting')}>
                <Text style = {titlePageStyles.startGameButtonBoxText}>START</Text>
            </TouchableOpacity>
            {/* show game ranks button box */}
            <TouchableOpacity style = {titlePageStyles.rankButtonBox}>
                <Text style = {titlePageStyles.rankButtonBoxText}>Ranks</Text>
            </TouchableOpacity>
        </>
    )
}

export default TitlePage