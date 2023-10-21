import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { lazy } from 'react'
import { useEffect } from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from './types'
import { Tab1, Tab2, Login, Modal, Splash } from '../collection/screen'
import { COLORS } from '../style/css/commonStyle'
import { IconHomeWhite, IconNewsGray, IconNewsWhite, IconStoreGray, IconStoreWhite, IconHomeGray, Icon_setting_gray, Icon_setting_white, Icon_calculate_white, Icon_calculate_gray, Icon_match_gray, Icon_match_white, IconPerson, IconCalendar, IconMessage } from '../collection/icons'

export default function Navigation() {
  useEffect(() => {
    // console.log('loading : ' + loading);
  }, [])

  return (
    <NavigationContainer
    //onReady={() => Referral({ navigationRef: navigationRef })}
    //onStateChange={() => Referral({ navigationRef: navigationRef })}
    >
      {/* <DevButton /> */}
      {/* <LoadingView setShow={loading} /> */}
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createStackNavigator<RootStackParamList>()
function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerShadowVisible: false,
          gestureEnabled: false,
        }}
      />

      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, gestureEnabled: false }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="ModalScreen" component={Modal} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator<RootTabParamList>()
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Splash"
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Tab1"
        component={Tab1}
        options={() => ({
          headerShown: false,
          headerShadowVisible: false,
          tabBarIcon: ({ focused }) => (focused ? <IconCalendar width={25} height={25} fill={COLORS.black_800} /> : <IconCalendar width={25} height={25} fill={COLORS.black_100} />),
        })}
      />
      <BottomTab.Screen
        name="Tab2"
        component={Tab2}
        options={() => ({
          title: '게시판',
          headerShown: false,
          tabBarIcon: ({ focused }) => (focused ? <IconMessage width={30} height={30} fill={COLORS.black_800} /> : <IconMessage width={30} height={30} fill={COLORS.black_100} />),
        })}
      />
    </BottomTab.Navigator>
  )
}
