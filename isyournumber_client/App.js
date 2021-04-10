// react navigation을 이용해 서로 페이지 전환이 가능하게 도와주는 base file (App.js)

import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TitlePage } from './src/pages'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Title' component = {TitlePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App