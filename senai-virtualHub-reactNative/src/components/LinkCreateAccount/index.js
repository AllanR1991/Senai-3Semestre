import { CreateAccount } from "../../screens/Access/CreateAccount"
import { LinkBlue } from "../Link/style"
import { ContainerAccount, TextCreateAccount } from "./style"

export const LinkCreateAccount = ({ navigation }) => {
  return (
    <ContainerAccount>
      <TextCreateAccount>Não tem conta? </TextCreateAccount>
      <LinkBlue
        onPress={() => navigation.navigate(CreateAccount)}
      >Crie uma conta agora!</LinkBlue>
    </ContainerAccount>
  )
}