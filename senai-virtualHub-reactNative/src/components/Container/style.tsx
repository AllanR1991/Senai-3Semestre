import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #fafafa;
`;

export const ContainerScroll = styled.ScrollView``;

export const ContainerProfile = styled(Container)`
	justify-content: flex-start;
`;

interface ContainerInputsButtonProps {
	$marginTop?: 0;
	$marginBottom?: 0;
	$gap?: 0;
	$fd?: "column";
	$width?: 0;
	$jc?: "space-between" | "flex-start";
}

export const ContainerInputsButton = styled.View<ContainerInputsButtonProps>`
	margin-top: ${({ $marginTop }) =>
		$marginTop != undefined ? `${$marginTop}px` : "0px"};
	margin-bottom: ${({ $marginBottom }) =>
		$marginBottom ? `${$marginBottom}px` : "0px"};
	width: ${({ $width }) => ($width != undefined ? `${$width}` : "90%")};
	flex-direction: ${({ $fd }) => ($fd != undefined ? `${$fd}` : "column")};
	gap: ${({ $gap }) => ($gap != undefined ? `${$gap}px` : "0px")};
	align-items: center;
	justify-content: ${({ $jc }) => $jc};
`;

export const ContainetInputsButtonMod = styled(ContainerInputsButton)`
	align-items: flex-start;
`;

export const ContainerHeader = styled(LinearGradient).attrs({
	colors: ["#60BFC5", "#496BBA"],
	start: { x: -0.05, y: 1.08 },
	end: { x: 1, y: 0 },
})`
	width: 100%;
	height: 144px;
	padding: 62px 22px;
	padding-bottom: 22px;

	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	border-radius: 0px 0px 15px 15px;
	box-shadow: 0px 4px 15px #00000014;
`;

export const ContainerDataProfile = styled.View`
	position: relative;
	width: 100%;
	height: 30%;
	min-height: 256px;
	z-index: 5;
`;
export const FilterAppointment = styled.View`
	width: 90%;
	flex-direction: row;
	justify-content: space-between;
`;
