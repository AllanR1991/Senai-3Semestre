import styled from "styled-components/native";

export const ContentSubtitle = styled.View`
  margin-bottom: ${props=> `${props.marginBottom}px` || '0px'};
  margin-top: ${props=> `${props.marginTop}px` || '0px'};
  width: 90%;
`

export const SubtitleStyle = styled.Text`
  font-size: 16px;
  text-align: center;
  font-family: "Quicksand_500Medium";
  color: #5F5C6B;
`

export const SubtitleEmailStyle = styled(SubtitleStyle)`
  font-family: "MontserratAlternates_600SemiBold";
  color: #496BBA;
`

