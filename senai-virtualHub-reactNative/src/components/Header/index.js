import { ContainerHeader } from "../Container/style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./style";
import { MaterialIcons } from "@expo/vector-icons";


export const Header = () => {
  return (
    <ContainerHeader>
        <BoxUser>
          <ImageUser source={{ uri: "https://github.com/allanr1991.png" }} />
          <DataUser>
            <TextDefault>Bem vindo !</TextDefault>
            <NameUser>Dr. Allan</NameUser>
          </DataUser>
        </BoxUser>

        {/* material icons */}
        <MaterialIcons name="notifications" size={25} color="#fbfbfb" />
    
    </ContainerHeader>
  );
};