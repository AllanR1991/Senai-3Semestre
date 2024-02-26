import { StatusBar } from "react-native"
import { BrandLogo } from "../../components/BrandLogo/style"
import { Container, ContainerInputsBotton } from "../../components/Container/style"
import { Input } from "../../components/Input"
import { Title } from "../../components/Title"
import { Button } from "../../components/Button"
import { Subtitle } from "../../components/Subtitle"
import { LinkBlue } from "../../components/Link/style"

export const CreateAccount = ({ navigation }) => {
  return (
    <Container>
      <StatusBar />

      <BrandLogo />

      <Title
        marginTop={25}
        marginBottom={15}
        text="Criar conta"
      />

      <Subtitle
        marginBottom={20}
        text="Insira seu endereço de e-mail e senha para realizar seu cadastro."
      />

      <ContainerInputsBotton
        $marginBottom={30}
      >

        <Input
          placeholder="Usuário ou E-mail"
          keyboardType="email-address"
        />

        <Input
          placeholder="Senha"
          secureTextEntry
        />

        <Input
          placeholder="Confirmar Senha"
          secureTextEntry
        />

      </ContainerInputsBotton>

      <ContainerInputsBotton
        $marginBottom={30}
      >

        <Button
          text="Cadastrar"
        />

      </ContainerInputsBotton>

      <LinkBlue
        onPress={() => navigation.popToTop()}
      >
        Cancelar
      </LinkBlue>
    </Container>

  )
}