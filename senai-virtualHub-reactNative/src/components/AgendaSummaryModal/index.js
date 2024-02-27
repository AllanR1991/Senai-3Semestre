import { StatusBar } from "expo-status-bar";
import { Button } from "../Button";
import { Container, ContainerInputsButton } from "../Container/style";
import { TitleStyle } from "../Title/style";
import { AgendaSummary, ModalContent, SummaryModal, TextReturnValue } from "./style";
import { Subtitle } from "../Subtitle";
import { LinkBlue } from "../Link/style";
import { LabelInputDefaultStyle } from "../Input/style";

export const AgendaSummaryModal = ({
	visible,
	setShowCancel,
	navigation,
	...rest
}) => {
	return (
		<AgendaSummary
			{...rest}
			visible={visible}
			animationType="fade"
			transparent={true}
			statusBarTranslucent
		>
			<SummaryModal>
				<ModalContent>
					<TitleStyle>Agendar consulta</TitleStyle>
					<Subtitle
						marginTop="20"
						text="Consulte os dados selecionados para a sua consulta"
					/>

					<ContainerInputsButton $gap={20} $jc="flex-start">
						<ContainerInputsButton $gap={8} style={{ alignItems: "flex-start" }} $width={'100%'}>
							<LabelInputDefaultStyle>Data da consulta :</LabelInputDefaultStyle>
							<TextReturnValue>1 de Novembro de 2023</TextReturnValue>
						</ContainerInputsButton>
						<ContainerInputsButton $gap={8} style={{ alignItems: "flex-start" }} $width={'100%'}>
							<LabelInputDefaultStyle>Médico(a) da consulta :</LabelInputDefaultStyle>
							<TextReturnValue>Dra Alessandra</TextReturnValue>
							<TextReturnValue>Demartologa, Esteticista</TextReturnValue>
						</ContainerInputsButton>
						<ContainerInputsButton $gap={8} style={{ alignItems: "flex-start" }} $width={'100%'}>
							<LabelInputDefaultStyle>Local da consulta :</LabelInputDefaultStyle>
							<TextReturnValue>São Paulo, SP</TextReturnValue>
						</ContainerInputsButton>
						<ContainerInputsButton $gap={8} style={{ alignItems: "flex-start" }} $width={'100%'}>
							<LabelInputDefaultStyle>Tipo da consulta :</LabelInputDefaultStyle>
							<TextReturnValue>Rotina</TextReturnValue>
						</ContainerInputsButton>

					</ContainerInputsButton>


					<ContainerInputsButton $gap={30} $marginBottom={30} $marginTop={30}>
						<Button
							text="Confirmar"
							onPress={() => setShowCancel(false)}
						/>
						<LinkBlue onPress={() => setShowCancel(false)}>Cancelar</LinkBlue>
					</ContainerInputsButton>
				</ModalContent>
			</SummaryModal>
		</AgendaSummary>
	);
};
