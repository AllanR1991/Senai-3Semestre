import { LinearGradient } from "expo-linear-gradient"
import LottieView from "lottie-react-native"
import { Dimensions, Image } from "react-native"
import styled from "styled-components/native"

import heartRed from '../../assets/video/heartRed.json'

const size = Dimensions.get('window').width * 1;

export const ContainerSplash = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  `

export const Gradient = styled(LinearGradient).attrs({
  colors: ['#49B3BA', '#496BBA']
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Logo = styled(Image).attrs({
  source: require('../../assets/images/VitalHub_Logo.png')
})`
    
`

export const Video = styled(LottieView).attrs({
  source: heartRed,
  autoPlay: true,
  loop: true,
  resizeMode: 'contain',
})`
  width: ${`${size}px`};
  height: ${`${size}px`};
`

export const TextSlogan = styled.Text`
  font-family: "Quicksand_600SemiBold";
  font-size: 18px;
  width: 203px;
  text-align: center;
  color: #FFF;
`

