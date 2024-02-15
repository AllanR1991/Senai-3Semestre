import { Image, StatusBar, TouchableOpacity } from "react-native"
import { BrandLogo } from "../../components/BrandLogo/style"
import { Container, ContainerInputsBotton } from "../../components/Container/style"
import { InputCode } from "../../components/Input"
import { Title } from "../../components/Title"
import { Button, ButtonCancel } from "../../components/Button"
import { Subtitle } from "../../components/Subtitle"
import { LinkBlue } from "../../components/Link/style"
import { NewPassword } from "../NewPassword"

export const EmailCode = ({ navigation }) => {
  return (
    <Container>
      <StatusBar />

      <ButtonCancel 
        onPress={()=> navigation.popToTop()}
      />

      <BrandLogo />

      <Title
        marginTop={25}
        marginBottom={15}
        text="Verifique seu e-mail"
      />

      <Subtitle
        marginBottom={20}
        text="Digite o código de 4 dígitos enviado para "
        textEmail="username@email.com"
      />

      <InputCode
        marginBottom={30}
      />

      <ContainerInputsBotton
        marginBottom={30}
      >

        <Button text="Entrar" onPress={() => navigation.navigate(NewPassword)} />

      </ContainerInputsBotton>

      <LinkBlue 
        
      >
        Reenviar Código
      </LinkBlue>


    </Container>

  )
}