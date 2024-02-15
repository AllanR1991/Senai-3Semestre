import { StatusBar} from "react-native"
import { BrandLogo } from "../../components/BrandLogo/style"
import { Container, ContainerInputsBotton } from "../../components/Container/style"
import { Input } from "../../components/Input"
import { Title } from "../../components/Title"
import { Button, ButtonGoogle } from "../../components/Button"

import { RecoveryPassword } from "../RecoveryPassword"
import { LinkGrey } from "../../components/Link/style"
import { LinkCreateAccount } from "../../components/LinkCreateAccount"




export const Login = ({ navigation }) => {
  return (
    <Container>
      <StatusBar />

      <BrandLogo />

      <Title
        marginTop={25}
        marginBottom={20}
        text="Entrar ou criar conta"
      />

      <ContainerInputsBotton
        marginBottom={10}
      >

        <Input
          placeholder="Usuário ou E-mail"
          keyboardType="email-address"
        />

        <Input
          placeholder="Senha"
          secureTextEntry={true}
        />

      </ContainerInputsBotton>

      <LinkGrey
        onPress={() => navigation.navigate(RecoveryPassword)}
      >
        Esqueceu sua senha?
      </LinkGrey>

      <ContainerInputsBotton
        marginTop={30}
        marginBottom={30}
      >

        <Button
          text="Entrar"
        />

        <ButtonGoogle
          text="Entrar com Google"
        />

      </ContainerInputsBotton>

      <LinkCreateAccount navigation={navigation} />
    </Container>

  )
}