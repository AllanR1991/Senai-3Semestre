import { TitleStyle } from "./style";

export const Title = ({
  marginTop = '0px',
  marginBottom = '0px',
  text = ''
}) => {
  return (
    <TitleStyle
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {text}
    </TitleStyle>
  );
};