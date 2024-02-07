import { Image } from "react-native"
import { ButonTitle, Button, ButtonGoogle, ButtonTitleGoogle } from "../../components/Button/style"
import { Container } from "../../components/Container/style"
import { Input } from "../../components/Input/style"
import { LinkBold, LinkMedium } from "../../components/LinkMedium/styles"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"

import { AntDesign } from '@expo/vector-icons';
import { ContentAccount, TextAccount } from "./style"
//  https://icons.expo.fyi/Index/AntDesign/google

export const Login = ({navigation}) => {
  return(
    <Container>
      <Logo source={require("../../assets/Logo.png")}/>
      
      <Title>Entrar ou criar conta</Title>
      
      <Input 
        placeholder="Email"
      />
      <Input 
        placeholder="Senha"
        //secureTextEntry={true}
      />
      
      <LinkMedium>Esqueceu sua Senha?</LinkMedium>
      
      <Button>
        <ButonTitle>
          Entrar
        </ButonTitle>
      </Button>
      
      
      
      <ButtonGoogle>
        <AntDesign name="google" size={14} color="#496BBA" />
        <ButtonTitleGoogle>Entrar com google</ButtonTitleGoogle>
      </ButtonGoogle>

      <ContentAccount>
        <TextAccount>Não tem conta?</TextAccount>
        <LinkBold>Crie uma conta agora!</LinkBold>
      </ContentAccount>
    </Container>
  )
}