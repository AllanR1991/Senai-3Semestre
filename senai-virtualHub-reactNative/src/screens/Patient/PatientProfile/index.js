import { ScrollView, View } from "react-native"
import { Container, ContainerInputsButton } from "../../../components/Container/style"
import { DataProfile } from "../../../components/DataProfile"
import { InputDefault } from "../../../components/Input"
import { StatusBar } from "expo-status-bar"
import { Button } from "../../../components/Button"


export const PatientProfile = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <DataProfile />
      <ScrollView style={{ backgroundColor: '#FBFBFB' }} contentContainerStyle={{ alignItems: "center" }}>
        <ContainerInputsButton $marginTop={80} $gap={24} $width={'100%'} >

          <InputDefault label={'Data de nascimento:'} placeholder={'DD/MM/AAAA'} />
          <InputDefault label={'CPF:'} placeholder={'XXX.XXX.XXX-XX'} />
          <InputDefault label={'Endereço:'} placeholder={'Rua...'} />

          <ContainerInputsButton $fd="row" $jc="space-between">
            <InputDefault label={'Cep:'} placeholder={'XXXXX-XXX'} width="40%" />
            <InputDefault label={'Cidade:'} placeholder={'Cidade...'} width='55%' />
          </ContainerInputsButton>

        </ContainerInputsButton>
        <ContainerInputsButton $marginTop={30} $marginBottom={30}>
          <Button
            text="Salvar"
          />
        </ContainerInputsButton>

      </ScrollView>

    </>
  )
}