import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from './screens/Auth/SignIn'
import SignUp from './screens/Auth/SignUp'

const App = () => {
    const RootStack = createStackNavigator()
    
    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode="none">
                <RootStack.Screen name="Auth" component={AuthArea} options={{ animationEnabled: false }}/>
                <RootStack.Screen name="App" component={AuthArea} options={{ animationEnabled: false }}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

const AppArea = () => {
    const AuthStack = createStackNavigator()

    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="SignIn" component={SignIn} options={{ title: "Sign In" }}/>
            <AuthStack.Screen name="SignUp" component={SignUp} options={{ title: "Create Account" }}/>
        </AuthStack.Navigator>
    )
}

const AuthArea = () => {
    const AuthStack = createStackNavigator()

    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="SignIn" component={SignIn} options={{ title: "Sign In" }}/>
            <AuthStack.Screen name="SignUp" component={SignUp} options={{ title: "Create Account" }}/>
        </AuthStack.Navigator>
    )
}

export default App
