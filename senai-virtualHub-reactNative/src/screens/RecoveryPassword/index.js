import { Image, StatusBar, TouchableOpacity } from "react-native"
import { BrandLogo } from "../../components/BrandLogo/style"
import { Container, ContainerInputsBotton } from "../../components/Container/style"
import { Input } from "../../components/Input"
import { Title } from "../../components/Title"
import { Button, ButtonBack } from "../../components/Button"
import { Subtitle } from "../../components/Subtitle"
import { EmailCode } from "../EmailCode"

export const RecoveryPassword = ({ navigation }) => {
  return (
    <Container>
      <StatusBar />

      <ButtonBack
        onPress={() => navigation.goBack()}
      />

      <BrandLogo />

      <Title
        marginTop={25}
        marginBottom={15}
        text="Recuperar senha"
      />

      <Subtitle
        marginBottom={20}
        text="Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha"
      />

      <ContainerInputsBotton
        $marginBottom={30}
      >

        <Input
          placeholder="Usuário ou E-mail"
          keyboardType="email-address"
        />

      </ContainerInputsBotton>

      <ContainerInputsBotton>

        <Button
          text="Continuar"
          onPress={() => navigation.navigate(EmailCode)}
        />

      </ContainerInputsBotton>


    </Container>

  )
}