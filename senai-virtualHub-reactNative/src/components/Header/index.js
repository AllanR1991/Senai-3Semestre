import { ContainerHeader } from "../Container/style"
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./style"

export const Header = () => {
  return(

    <ContainerHeader>
      <BoxUser>
        <ImageUser />
        <DataUser>
          <TextDefault>Bem Vindo</TextDefault>
          <NameUser >Dr. Richard Kosta</NameUser>
        </DataUser>
      </BoxUser>
      {/* <MaterialIcons /> biblioteca */}
    </ContainerHeader>

  )
}