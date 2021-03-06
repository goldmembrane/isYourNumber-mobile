// react navigation을 이용해 서로 페이지 전환이 가능하게 도와주는 base file (App.js)

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MainGamePage, TitlePage, SettingPage, GameoverPage, RankPage } from './src/pages'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Title'>
        <Stack.Screen name = 'Title' component = {TitlePage} options = {{headerShown : false}}/>
        <Stack.Screen name = 'Setting' component = {SettingPage} options = {{headerShown : false}}/>
        <Stack.Screen name = 'Game' component = {MainGamePage} options = {{headerShown : false}}/>
        <Stack.Screen name = 'End' component = {GameoverPage} options = {{headerShown : false}} />
        <Stack.Screen name = 'Rank' component = {RankPage} options = {{headerShown : false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App