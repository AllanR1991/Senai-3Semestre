import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 44px;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  background-color:#496BBA;
  border-radius: 5px;
  margin-bottom: 15px;
`

export const ButonTitle = styled.Text`
  font-family: "MontserratAlternates_600SemiBold";
  color: #FFF;
  font-size: 14px;
  text-transform: uppercase;
`
export const ButtonGoogle = styled(Button)`
  border: 1px solid #496BBA;
  background-color: #fafafa;
  flex-direction: row;
  gap: 17px;
`

export const ButtonTitleGoogle = styled(ButonTitle)`
  color: #496BBA
`