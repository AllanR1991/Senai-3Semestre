import styled from "styled-components/native";

export const InputStyle = styled.TextInput.attrs({
  placeholderTextColor: '#34898F',
})`
  border: 2px solid #49B3BA;
  color: #34898F;
  font-family: 'MontserratAlternates_600SemiBold';
  font-size: 14px;
  padding: 16px;
  border-radius: 5px; 
`

export const InputCodeStyle = styled(InputStyle)`
  display:flex;
  font-family: 'Quicksand_600SemiBold';
  font-size: 40px;
  padding: 5px 20px;  
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid #77CACF;
  width:20%;
`

export const ContentInputs = styled.View`
  margin-top: ${props => `${props.marginTop}px` || '0px'};
  margin-bottom: ${props => `${props.marginBottom}px` || '0px'};
  width:90%;  
  flex-direction: row;
  justify-content: space-between;
`