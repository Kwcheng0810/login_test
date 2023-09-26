import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Profile() {
  return <Image source={require('../assets/images/user-profile.jpg')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    marginBottom: 8,
  },
})