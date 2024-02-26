import { ScrollView } from "react-native"
import { Container, ContainerInputsBotton } from "../../components/Container/style"
import { DataProfile } from "../../components/DataProfile"
import { InputDefault } from "../../components/Input"

export const PatientProfile = ({ navigation }) => {
  return (
    <Container>

      <DataProfile />
      <ScrollView>
        <ContainerInputsBotton $marginTop={80} $gap={24}>
          <InputDefault label={'Data de nascimento:'} placeholder={'DD/MM/AAAA'} />
          <InputDefault label={'CPF:'} placeholder={'XXX.XXX.XXX-XX'} />
          <InputDefault label={'Endereço:'} placeholder={'Rua...'} />
          <InputDefault label={'Cep:'} placeholder={'XXXXX-XXX'} />
          <InputDefault label={'Cidade:'} placeholder={'Cidade...'} />
        </ContainerInputsBotton>
      </ScrollView>
    </Container>
  )
}