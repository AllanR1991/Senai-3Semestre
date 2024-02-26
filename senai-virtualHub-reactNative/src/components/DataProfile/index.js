import { View } from "react-native"
import { PhotoProfile } from "../../components/PhotoProfile/style"
import { ContentUserData, UserEmail, UserName } from "./style"
import { ContainerDataProfile } from "../Container/style"

export const DataProfile = () => {
  return (
    <ContainerDataProfile>
      <PhotoProfile source={require('../../assets/images/photoProfile.png')} resizeMode="stretch" />
      <ContentUserData>
        <UserName>Richard Kosta</UserName>
        <UserEmail>richard.kosta@gmail.com</UserEmail>
      </ContentUserData>
    </ContainerDataProfile>
  )
}