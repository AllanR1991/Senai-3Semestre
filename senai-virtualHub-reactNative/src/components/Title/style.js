import styled from "styled-components/native";

export const TitleStyle = styled.Text`
  margin-bottom: ${props=> `${props.marginBottom}px` || '0px'};
  margin-top: ${props=> `${props.marginTop}px` || '0px'};
  font-size: 20px;
  text-align: center;
  font-family: "MontserratAlternates_600SemiBold";
  line-height: 30px;
  color: #33303E;
`
