import { StatusBar } from "expo-status-bar";
import { Button } from "../Button";
import { Container, ContainerInputsButton } from "../Container/style";
import { TitleStyle } from "../Title/style";
import { ModalCancel, ModalContent, PatientModal } from "./style";
import { Subtitle } from "../Subtitle";
import { LinkBlue } from "../Link/style";

export const CancelationModal = ({
	visible,
	setShowCancel,
	navigation,
	...rest
}) => {
	return (
		<ModalCancel
			{...rest}
			visible={visible}
			animationType="fade"
			transparent={true}
			statusBarTranslucent
		>
			<PatientModal>
				<ModalContent>
					<TitleStyle>Cancelar Consulta</TitleStyle>
					<Subtitle
						marginTop="20"
						text="Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?"
					/>

					<ContainerInputsButton $gap={30} $marginBottom={30} $marginTop={30}>
						<Button
							text="Cancelar"
							onPress={() => setShowCancel(false)}
						/>
						<LinkBlue onPress={() => setShowCancel(false)}>Cancelar</LinkBlue>
					</ContainerInputsButton>
				</ModalContent>
			</PatientModal>
		</ModalCancel>
	);
};
