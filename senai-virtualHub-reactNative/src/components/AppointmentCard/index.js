import { AntDesign } from "@expo/vector-icons";
import {
  ButtonCard,
  ButtonText,
  ClockCard,
  ContainerCardsList,
  ContentCard,
  DataProfileCard,
  ProfileData,
  ProfileImage,
  ProfileName,
  TextAge,
  TextBold,
  ViewRow,
} from "./style";

export const AppointmentCard = ({
  situacao = "pendente",
  onPressCancel,
  onPressAppointment,
  nome='',
  idade='',
  consulta='',
  image='https://github.com/AllanR1991.png',
}) => {
  let foto = (image=='' ? 'https://github.com/AllanR1991.png' : image)
  return (


    // container principal
    <ContainerCardsList>
      {/* imagem de perfil */}
      <ProfileImage source={{ uri: foto  } } />

      {/* conteúdo ao lado da imagem de perfil */}
      <ContentCard>
        <DataProfileCard>
          <ProfileName>{nome}</ProfileName>

          <ProfileData>
            <TextAge>{idade<2 ? `${idade} ano` : `${idade} anos`}</TextAge>
            <TextBold>{consulta }</TextBold>
          </ProfileData>
        </DataProfileCard>

        <ViewRow>
          <ClockCard situacao={situacao}>
            <AntDesign
              name="clockcircle"
              size={14}
              color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"}
            />

            <TextBold situacao={situacao} color={"#49B3BA"}>
              14:00
            </TextBold>
          </ClockCard>

            {/* valida e mostra o tipo de botão conforme a situação */}

            {
                situacao == "cancelado" ? (
                    <>
                    </>
                ) : situacao == "pendente" ? (
                    <ButtonCard onPress={onPressCancel}>
                        <ButtonText situacao={situacao}>Cancelar</ButtonText>
                    </ButtonCard>
                ) : (
                    <ButtonCard onPress={onPressAppointment}>
                        <ButtonText situacao={situacao}>Ver Prontuário</ButtonText>
                    </ButtonCard>
                )
            }

          
        </ViewRow>
      </ContentCard>
    </ContainerCardsList>
  );
};