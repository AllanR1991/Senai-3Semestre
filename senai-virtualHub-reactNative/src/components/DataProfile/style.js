import styled from "styled-components/native";

export const UserName = styled.Text`
  font-family: 'MontserratAlternates_600SemiBold';
  font-size: 16px;
  color: #33303E;
  
`
export const UserEmail = styled.Text`
  font-family: 'Quicksand_500Medium';
  font-size: 14px;
  color: #4E4B59;
`

export const ContentUserData = styled.View.attrs({
})`
  width: 80%;
  justify-content: center;
  align-items: center;
  padding: 26px 0px;  
  border-radius: 5px;
  position: absolute;
  background-color:#FFF;
  bottom:-15%;
  left:10%;
  elevation: 15; /* Android */
  shadow-color: rgba(0, 0, 0, 0.15); /* iOS */
  shadow-offset: 4px 4px; /* iOS */
  shadow-opacity: 1; /* iOS */
  shadow-radius: 15px; /* iOS */
`