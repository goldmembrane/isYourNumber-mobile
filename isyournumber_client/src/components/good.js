import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSpring, animated } from 'react-spring'

const AnimatedView = animated(View)

const goodStyles = StyleSheet.create({

    // display good box style
    goodBox: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 60,
    },

    // display good box text style
    goodBoxText: {
        fontSize: 80,
        color: '#ff0000',
        textAlign: 'center',
    }
})

const Good = () => {

    // good box에 animation 연결하는 코드
    const goodAnimate = useSpring({
        loop: {reverse: true},
        from: { opacity: 1 },
        to: { opacity: 0 },
        config: {duration: 500},
    })

    return (
        <>
            <AnimatedView style = {goodAnimate}>
                <View style = {goodStyles.goodBox}>
                    <Text style = {goodStyles.goodBoxText}>O</Text>
                </View>
            </AnimatedView>
        </>
    )
}

export default Good