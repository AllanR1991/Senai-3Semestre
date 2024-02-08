import styled from "styled-components/native";

export const InputStyle = styled.TextInput.attrs(props => ({
  placeholderTextColor: "#49B3BA"
}))`
  width: ${props => `{${props.width}}`};
  height: ${props => `{${props.height}}`};
  padding: ${props => `{${props.padding}}`};
  border-radius: ${props => `{${props.borderRadius}}`};
  border: ${props => `{${props.border}}`};
  //margin-top: 15px;
  font-size: ${props => `{${props.fontSize}}`};
  font-family: ${props => `{${props.fontFamily}}`};
  color:${props => `{${props.color}}`};
`