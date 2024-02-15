import { ContainerSplash, Gradient, Logo, TextSlogan, Video } from "./style";
import { useEffect } from "react";
import { CommonActions } from "@react-navigation/native";

export const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      }))
    }, 4000);
  })

  return (
    <ContainerSplash>

      <Gradient>

        <Logo/>

        <Video/>

        <TextSlogan>
          Ajudando você a cuidar da sua saúde!
        </TextSlogan>

      </Gradient>
    </ContainerSplash>
  )
}