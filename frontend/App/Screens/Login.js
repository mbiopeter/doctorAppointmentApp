import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import LoginImage from '../../assets/images/LoginImage.jpg'
import Colors from '../../assets/Shared/Colors'
import SignInWithOAuth from '../Components/SignInWithOAuth'


export default function Login() {
  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.LIGHT_GRAY
    }}>
      <Image source={LoginImage} style={styles.appImage} />
      <View style={{
        backgroundColor: Colors.white,
        padding: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
        <Text style={styles.heading}>Your Ultimate Doctor</Text>
        <Text style={styles.heading}>Appointment Booking App</Text>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>Book Appointment Effortlessly and manage your health journey</Text>
        <SignInWithOAuth />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appImage: {
    width: 300,
    height: 500,
    objectFit: 'contain',
    marginTop: 50,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: Colors.BLACK
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold'
  }
})
