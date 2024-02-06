import { Container } from "../../components/Container/style"
import { Input } from "../../components/Input/style"
import { LinkMedium } from "../../components/LinkMedium/styles"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"

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
      {/*
      <Button>
        <ButonTitle></ButonTitle>
      </Button>

      <ButtonGoogle>
        <ButtonTitleGoogle></ButtonTitleGoogle>
      </ButtonGoogle>

      <ContentAccount>
        <TextAccount></TextAccount>
      </ContentAccount> */}
    </Container>
  )
}