import { StatusBar } from "react-native"
import { BrandLogo } from "../../components/BrandLogo/style"
import { Container, ContainerInputsButton } from "../../components/Container/style"
import { Input } from "../../components/Input"
import { Title } from "../../components/Title"
import { Button, ButtonCancel } from "../../components/Button"
import { Subtitle } from "../../components/Subtitle"

export const NewPassword = ({ navigation }) => {
  return (
    <Container>
      <StatusBar />

      <ButtonCancel
        onPress={() => navigation.popToTop()}
      />

      <BrandLogo />

      <Title
        marginTop={25}
        marginBottom={15}
        text="Redefinir senha"
      />

      <Subtitle
        marginBottom={20}
        text="Insira e confirme a sua nova senha"
      />

      <ContainerInputsButton
        $marginBottom={30}
      >

        <Input
          placeholder="Nova Senha"
          secureTextEntry
        />

        <Input
          placeholder="Confirmar nova senha"
          secureTextEntry
        />

      </ContainerInputsButton>

      <ContainerInputsButton>

        <Button
          text="Confirmar nova senha"
        />

      </ContainerInputsButton>


    </Container>

  )
}