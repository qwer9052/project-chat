import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LogoFull } from '../collection/icons'
const styles = StyleSheet.create({
  loading_able: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.7)',
    zIndex: 1000,
  },
})

type LoadingViewTypes = {
  setShow: boolean
}

export function LoadingView(props: LoadingViewTypes) {
  return props.setShow ? (
    <View style={styles.loading_able}>
      <LogoFull width={30} height={30} />
    </View>
  ) : null
}
