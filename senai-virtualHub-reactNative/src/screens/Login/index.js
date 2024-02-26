
import { BrandLogo } from "../../components/BrandLogo/style"
import { Container, ContainerInputsButton } from "../../components/Container/style"
import { Input } from "../../components/Input"
import { Title } from "../../components/Title"
import { Button, ButtonGoogle } from "../../components/Button"

import { RecoveryPassword } from "../RecoveryPassword"
import { LinkGrey } from "../../components/Link/style"
import { LinkCreateAccount } from "../../components/LinkCreateAccount"
import { StatusBar } from "react-native"




export const Login = ({ navigation }) => {
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={'#fafafa'} />

      <BrandLogo />

      <Title
        marginTop={25}
        marginBottom={20}
        text="Entrar ou criar conta"
      />

      <ContainerInputsButton
        $marginBottom={10}
      >

        <Input
          placeholder="Usuário ou E-mail"
          keyboardType="email-address"
        />

        <Input
          placeholder="Senha"
          secureTextEntry={true}
        />

      </ContainerInputsButton>

      <LinkGrey
        onPress={() => navigation.navigate(RecoveryPassword)}
      >
        Esqueceu sua senha?
      </LinkGrey>

      <ContainerInputsButton
        $marginTop={30}
        $marginBottom={30}
      >

        <Button
          text="Entrar"
        />

        <ButtonGoogle
          text="Entrar com Google"
        />

      </ContainerInputsButton>

      <LinkCreateAccount navigation={navigation} />
    </Container>

  )
}