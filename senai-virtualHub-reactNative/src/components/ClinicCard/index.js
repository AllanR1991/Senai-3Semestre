import { AntDesign } from "@expo/vector-icons";
import {
  ButtonCard,
  ButtonText,
  ClockCard,
  ContainerCardsList,
  ContentCard,
  TextBold,
  ViewRow,
} from "./style";
import { Title } from "../Title";

export const ClinicCard = ({
  open = "",
  onPressCancel,
  onPressAppointment,
  nome = '',
  adress = '',
  consulta = '',
  stars = 0,
  select = false,
}) => {

  return (


    // container principal
    <ContainerCardsList>
      <ContentCard>
        <ViewRow>
          <Title text={nome} />

        </ViewRow>
      </ContentCard>
    </ContainerCardsList>
  );
};