import styled from "styled-components";

export const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: "#49B3BA"
}))`
  width: 90%;
  height: 53px;
  padding: 16px;
  border-radius: 5px;
  border: 2px solid #49B3BA;
  margin-top: 15px;
  font-size: 16px;
  font-family: 'MontserratAlternates_600SemiBold';
`