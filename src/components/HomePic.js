import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default function HomePic() {
  return (
    <View>
        <Image
            source={require("../assets/images/spiderman.webp")}
            style={{
                height: 100,
                width: 100,
                borderRadius: 20,
                position: "absolute",
                top: 10,
                transform: [
                    { translateX: -140 },
                    { translateY: -70 },
                    { rotate: "-15deg" }
                ]
            }}
        />

        <Image
            source={require("../assets/images/pokemon-unite.jpeg")}
            style={{
                height: 100,
                width: 100,
                borderRadius: 20,
                position: "absolute",
                top: -30,
                left: 100,
                transform: [
                    { translateX: -120 },
                    { translateY: -50 },
                    { rotate: "15deg" }
                ]
            }}
        />

        <Image
            source={require("../assets/images/halo-infinite.jpeg")}
            style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                position: "absolute",
                top: 130,
                left: -50,
                transform: [
                    { translateX: -110 },
                    { translateY: -70 },
                    { rotate: "15deg" }
                ]
            }}
        />

        <Image
            source={require("../assets/images/god-of-war.jpeg")}
            style={{
                height: 150,
                width: 150,
                borderRadius: 20,
                position: "absolute",
                top: 110,
                left: 100,
                transform: [
                    { translateX: -110 },
                    { translateY: -80 },
                    { rotate: "-15deg" }
                ]
            }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})