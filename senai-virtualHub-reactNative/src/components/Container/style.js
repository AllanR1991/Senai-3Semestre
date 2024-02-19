import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
  flex: 1;
  //justify-content: center;
  align-items: center;
  background-color: #FAFAFA;
`

export const  ContainerInputsBotton = styled.View`
  margin-top: ${props => (props.marginTop ? props.marginTop + 'px' : '0px')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom + 'px' : '0px')};
  width: 90%;
  gap: 15px;
`

export const ContainerHeader = styled(LinearGradient).attrs({
  colors: ['#60BFC5', '#496BBA'],
  start: {x: -0.05, y: 1.08},
  end: {x:1, y:0},
})`
  width: 100%;
  height: 144px;
  border-radius: 0px 0px 15px 15px;
`

export const ContainerDataProfile = styled.View`
  position: relative;
  width: 100%;
  height: 30%;
`
export const FilterAppointment = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
`