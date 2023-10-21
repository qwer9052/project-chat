/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Login: undefined
  Signup: undefined
  Landing: undefined
  Splash: undefined
  PostWrite: undefined
  PostDetail: { postId: number }
  PostSearch: undefined
  CommentDetail: { commentId: number }
  Test2: undefined
  ModalScreen: undefined
  NotFound: undefined
  Root: NavigatorScreenParams<RootTabParamList> | undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>

export type RootTabParamList = {
  Tab1: undefined
  Tab2: undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<BottomTabScreenProps<RootTabParamList, Screen>, NativeStackScreenProps<RootStackParamList>>
