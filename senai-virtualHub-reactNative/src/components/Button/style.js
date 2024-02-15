import styled from "styled-components/native";

export const ButtonStyle = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  border-radius: 5px;
  padding: 12px 8px;
  gap: 27px;
  background-color: #496BBA;
  align-items: center;
  justify-content: center;
`

export const TextButtonStyle = styled.Text`
  font-family: 'MontserratAlternates_700Bold';
  font-size: 18px;
  color: #FFF;
  text-transform: uppercase;
`

export const ButtonGoogleStyle = styled(ButtonStyle)`
  background-color: #FAFAFA;
  border: 1px solid #496BBA;
`

export const TextButtonGoogleStyle = styled(TextButtonStyle)`
  color: #496BBA;
`

export const ButtomCircleStyle = styled.TouchableOpacity`
  position: absolute;
  top: 5%;
  left: 5%;
  padding: 8px;
`

export const ImageBackStyle = styled.Image.attrs({
  source: require('../../assets/images/ButtonBack.png')
})`
  width: 30px;
  height: 30px;
`
export const ImageCancelStyle = styled(ImageBackStyle).attrs({
  source: require('../../assets/images/ButtomCancel.png')
})`

`