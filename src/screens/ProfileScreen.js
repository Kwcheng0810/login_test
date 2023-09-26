import React from 'react'
import Background from '../components/Background'
import Profile from '../components/Profile'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function ProfileScreen({ navigation }) {
  return (
    <Background>
      <Profile />
      <Paragraph>
        You may press the Profile butoon to view your profile
      </Paragraph>
      
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('HomeScreen')}
      >
        Back
      </Button>
    </Background>
  )
}