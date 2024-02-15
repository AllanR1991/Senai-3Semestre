import styled from "styled-components/native";

export const BoxUser = styled.View`
  flex-direction: row;
  align-items: center;
  gap:10;
`

export const ImageUser = styled.Image.attrs({
  source: require('../../assets/images/photoProfile.png')
})`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`

export const DataUser = styled.View`

`

export const TextDefault = styled.Text`
  font-family: 'Quicksand_500Medium';
  font-size: 14px;
`

export const NameUser = styled.Text`

`