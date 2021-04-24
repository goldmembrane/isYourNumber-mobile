import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
    return (
        <>
            <View style = {badStyles.badBox}>
                <Text style = {badStyles.badBoxText}>X</Text>
            </View>
        </>
    )
}

export default Bad