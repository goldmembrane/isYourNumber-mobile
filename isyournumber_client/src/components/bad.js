import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSpring, animated } from 'react-spring'

const AnimatedView = animated(View)

const badStyles = StyleSheet.create({
    
    // display bad box style
    badBox: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 60,
    },

    // display bad box text style
    badBoxText: {
        fontSize: 80,
        color: '#0000ff',
        textAlign: 'center'
    }
})

const Bad = () => {

    // bad box에 animation을 연결하는 코드
    const badAnimate = useSpring({
        loop: {reverse: true},
        from: { opacity: 1 },
        to: { opacity: 0 },
        config: {duration: 500},
    })

    return (
        <>
            <AnimatedView style = {badAnimate}>
                <View style = {badStyles.badBox}>
                    <Text style = {badStyles.badBoxText}>X</Text>
                </View>
            </AnimatedView>
        </>
    )
}

export default Bad