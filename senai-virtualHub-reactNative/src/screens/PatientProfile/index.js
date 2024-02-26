import { ScrollView, View } from "react-native"
import { Container, ContainerInputsButton } from "../../components/Container/style"
import { DataProfile } from "../../components/DataProfile"
import { InputDefault } from "../../components/Input"
import { StatusBar } from "expo-status-bar"


export const PatientProfile = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <DataProfile />
      <ScrollView keyboardShouldPersistTaps="handled">
        <ContainerInputsButton $marginTop={80} $gap={24} >

          <InputDefault label={'Data de nascimento:'} placeholder={'DD/MM/AAAA'} />
          <InputDefault label={'CPF:'} placeholder={'XXX.XXX.XXX-XX'} />
          <InputDefault label={'Endereço:'} placeholder={'Rua...'} />

          <ContainerInputsButton $fd="row">
            <InputDefault label={'Cep:'} placeholder={'XXXXX-XXX'} width="40%" />
            <InputDefault label={'Cidade:'} placeholder={'Cidade...'} width='40%' />
          </ContainerInputsButton>
        </ContainerInputsButton>
      </ScrollView>
    </>
  )
}