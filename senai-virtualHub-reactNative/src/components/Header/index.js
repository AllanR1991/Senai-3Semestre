import { ContainerHeader } from "../Container/style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./style";
import { MaterialIcons } from "@expo/vector-icons";


export const Header = () => {
  return (
    <ContainerHeader>
        <BoxUser>
          <ImageUser source={{ uri: "https://github.com/allar1991.png" }} />
          <DataUser>
            <TextDefault>Bem vindo !</TextDefault>
            <NameUser>Dr.Enzo</NameUser>
          </DataUser>
        </BoxUser>

        {/* material icons */}
        <MaterialIcons name="notifications" size={25} color="#fbfbfb" />
    
    </ContainerHeader>
  );
};