import React from 'react';
import { NavigationContainer, NavigationProp,  useNavigation as useNativeNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, ChatScreen, NoticeScreen, RegisterScreen, RegisterListScreen } from '../screens';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export type ParamList = {
    Home: {};
    Chat: {};
    Notice: {};
    Register: {};
    RegisterList: {};
}

export const useNavigation = () => {
    return useNativeNavigation<NavigationProp<ParamList>>();
};

const Stack = createNativeStackNavigator();

export function NavigationProvider() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    contentStyle: {backgroundColor: Colors.white}
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="RegisterList" component={RegisterListScreen}/>
                <Stack.Screen name="Chat" component={ChatScreen}/>
                <Stack.Screen name="Notice" component={NoticeScreen}/>
                <Stack.Screen name="Register" component={RegisterScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}