import React from 'react'
import Background from '../components/Background'
import HomePic from '../components/HomePic'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function HomeScreen({ navigation }) {
  return (
    <Background>
        <HomePic />
        <Header>Welcome</Header>
        <Paragraph>
            You may press the Profile buton to view your profile
        </Paragraph>
        <Button
            mode="contained"
            onPress={() => navigation.navigate('ProfileScreen')}
        >
            Profile
        </Button>
        <Button
            mode="outlined"
            onPress={() => navigation.navigate('test')}
        >
            Logout
        </Button>
        </Background>
  )
}