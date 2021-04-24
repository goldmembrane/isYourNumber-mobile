import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const goodStyles = StyleSheet.create({

    // display good box style
    goodBox: {
        width: 100,
        height: 100,
    },

    // display good box text style
    goodBoxText: {
        fontSize: 30,
        color: '#ff0000',
    }
})

const Good = () => {
    return (
        <>
            <View style = {goodStyles.goodBox}>
                <Text style = {goodStyles.goodBoxText}>O</Text>
            </View>
        </>
    )
}

export default Good