import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import heartRed from '../../assets/heartRed.json'
import { CommonActions } from '@react-navigation/native';
import { ContainerSplash, TextSlogan } from './style';
import { LinearGradient } from 'expo-linear-gradient';

//https://github.com/lottie-react-native/lottie-react-native

const size = Dimensions.get('window').width * 1;

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      }))
    }, 4000);
  })

  return (
    <ContainerSplash>
      <LinearGradient
        colors={['#49B3BA', '#496BBA']}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >


        <Image source={require("../../assets/VitalHub_Logo_Branco.png")}/>

        {/* Animação do coração */}
        <LottieView
          source={heartRed}
          style={{ width: size, height: size }}
          autoPlay
          loop
          resizeMode='contain'
        />

        {/* texto informativo */}
        <TextSlogan
          style={{
            fontFamily: "Quicksand_600SemiBold",
            fontSize: 18,
            width: 203,
            textAlign: 'center',
            color: "#FFF"
          }}>
          Ajudando você a cuidar da sua saúde!
        </TextSlogan>
      </LinearGradient >
    </ContainerSplash>
  );
}

export default Splash;