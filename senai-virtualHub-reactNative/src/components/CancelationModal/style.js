import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import styled from "styled-components/native";

const statusBarHeight = StatusBar.currentHeight || 0;

export const ModalCancel = styled.Modal`
width:90%;
margin: 20px;
flex:1;
    background-color: 'white';
    border-radius: 20px;
    padding: 35px;
    align-items: 'center';
`

export const PatientModal = styled.View`
    top: ${`-${statusBarHeight}px`};
    flex: 1;
    align-items:center ;
    justify-content: center ;    
    background-color:   rgba(0, 0, 0, 0.3) ; 
`

export const ModalContent = styled.View`
    width: 90% ;
    padding: 30px 30px 10px ;
    border-radius: 10px ;
    background-color: #fff ;
    align-items:center ;
`