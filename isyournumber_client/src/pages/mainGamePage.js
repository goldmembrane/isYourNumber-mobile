// main game이 이루어지는 main game page
import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import { useState } from 'react'
import CountDown from 'react-native-countdown-component'
import Good from '../components/good'
import Bad from '../components/bad'
import * as random from '../modules/random'


// main game page의 style을 구성할 코드
const mainGamePageStyles = StyleSheet.create({
    
    // main game time box style
    gameTimerBox: {
        width: 100,
        height: 100,
        backgroundColor: '#00c6fb',
        borderRadius: 10,
        marginTop: 50,
        marginLeft: 20,
    },

    // main game formular box style
    gameFormularBox: {
        width: 300,
        height: 140,
        alignSelf: 'center',
        backgroundColor: '#4fb576',
        borderRadius: 15,
        borderStyle: 'solid',
        borderWidth: 10,
        borderColor: '#e6b980',
        marginTop: 120,
    },

    // main game formular box text style
    gameFormularBoxText: {
        fontSize: 42,
        textAlign: 'center',
        lineHeight: 120,
        fontWeight: 'bold'
    },

    // main game board box style
    gameBoardBox: {
        width: 300,
        height: 60,
        marginBottom: 30,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 50,
    },

    // main game board score text style
    gameScoreText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600',
        color: '#2575fc',
    },

    // main game board warning text style
    gameWarningText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600',
        color: '#f5576c',
    },

    // main game select collection box style
    gameSelectButtonCollection: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },

    // main game below box style
    gameAnswerBelowButtonBox: {
        flex: .325,
        backgroundColor: '#0ba360',
        height: 180,
    },

    // main game below box test style
    gameAnswerBelowButtonBoxText: {
        fontSize: 40,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
        lineHeight: 180,
    },

    // main game answer box style
    gameAnswerButtonBox: {
        flex: .35,
        backgroundColor: '#fee140',
    },

    // main game answer box text style
    gameAnswerButtonBoxText: {
        fontSize: 40,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
        lineHeight: 180,
    },

    // main game among answer button box
    gameAnswerAmongButtonBox: {
        flex: .325,
        backgroundColor: '#feada6',
    },

    // main game among answer button text box
    gameAnswerAmongButtonBoxText: {
        fontSize: 40,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
        lineHeight: 180,
    },
})

// main game page의 화면을 구성할 코드

const MainGamePage = ({ navigation, route }) => {

    // 랜덤으로 formular를 생성하면, 그 formular를 저장하는 state
    const [ formular, setFormular ] = useState('')

    // 정답을 맞출 경우에 숫자가 증가하는 right state
    const [ right, setRight ] = useState(0)

    // 오답일 경우에 숫자가 증가하는 wrong state
    const [ wrong, setWrong ] = useState(0)

    // 맞췄는지 틀렸는지 판단하고 저장하는 state
    const [ result, setResult ] = useState(null)

    // 랜덤으로 formular를 생성하는 함수
    const setRandomFormular = () => {

        const randomFormular = `${Math.floor(Math.random() * 99) + 1}${random.operator[Math.floor(Math.random() * 2) + 1]}${Math.floor(Math.random() * 99) + 1}${random.operator[Math.floor(Math.random() * 2) + 1]}${Math.floor(Math.random() * 99) + 1}`

       if ( eval(randomFormular) > route.params.number - 5 && eval(randomFormular) < route.params.number + 5) {
           setFormular(randomFormular)
       }else {
           setRandomFormular()
       }

    }

    // formular와 랜덤 숫자를 비교하여 formular가 더 낮을 경우에 발동하는 함수
    const belowAnswer = () => {
        
        if ( eval(formular) < route.params.number ) {
            setRight(right + 1)
            console.log('right :',right)
            setResult('o')
        }else {
            setWrong(wrong + 1)
            console.log('wrong :',wrong)
            setResult('x')
            if ( wrong > 1 ) {
                navigation.navigate('End', {score: right})
            }
        }
    }

    // formular와 랜덤 숫자를 비교하여 formular값과 같은 경우에 발동하는 함수
    const sameAnswer = () => {
        
        if ( eval(formular) === route.params.number ) {
            setRight(right + 1)
            console.log('right :',right)
            setResult('o')
        }else {
            setWrong(wrong + 1)
            console.log('wrong :',wrong)
            setResult('x')
            if ( wrong > 1 ) {
                navigation.navigate('End',{score: right})
            }
        }
    }

    // formular와 랜덤 숫자를 비교하여 formular가 더 높을 경우에 발동하는 함수
    const amongAnswer = () => {
        
        if ( eval(formular) > route.params.number ) {
            setRight(right + 1)
            console.log('right :',right)
            setResult('o')
        }else {
            setWrong(wrong + 1)
            console.log('wrong :',wrong)
            setResult('x')
            if ( wrong > 1 ) {
                navigation.navigate('End', {score: right})
            }
        }
    }

    // 화면이 처음 렌더링되면 실행하기 위한 hook
    useEffect(() => {
        setRandomFormular()
    },[])

    return (
        <>
            <View style = {mainGamePageStyles.gameTimerBox}>
                <CountDown 
                until = {58}
                onFinish = {() => navigation.navigate('End', {score: right})}
                size = {38}
                timeToShow = {['S']}
                timeLabels = {{s: null}}
                digitStyle = {{backgroundColor: '#00c6fb'}}
                />
            </View>
            <View style = {mainGamePageStyles.gameFormularBox}>
                <Text style = {mainGamePageStyles.gameFormularBoxText}>{formular}</Text>
            </View>
            <View style = {mainGamePageStyles.gameBoardBox}>
                <Text style = {mainGamePageStyles.gameScoreText}>score : {right}</Text>
                <Text style = {mainGamePageStyles.gameWarningText}>warning : {wrong}</Text>
            </View>
            <View style = {mainGamePageStyles.gameSelectButtonCollection}>
                <TouchableOpacity style = {mainGamePageStyles.gameAnswerBelowButtonBox} onPress = {() => {belowAnswer(); setRandomFormular();}}>
                    <Text style = {mainGamePageStyles.gameAnswerBelowButtonBoxText}>{route.params.number}&lt;</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {mainGamePageStyles.gameAnswerButtonBox} onPress = {() => {sameAnswer(); setRandomFormular();}}>
                    <Text style = {mainGamePageStyles.gameAnswerButtonBoxText}>{route.params.number}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {mainGamePageStyles.gameAnswerAmongButtonBox} onPress = {() => {amongAnswer(); setRandomFormular();}}>
                    <Text style = {mainGamePageStyles.gameAnswerAmongButtonBoxText}>&gt;{route.params.number}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default MainGamePage