import { ContentSubtitle, SubtitleEmailStyle, SubtitleStyle } from "./style";

export const Subtitle = ({
  marginTop = '0px',
  marginBottom = '0px',
  text = '',
  textEmail = '',
}) => {
  return (
    <ContentSubtitle
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <SubtitleStyle>
        {text}
      </SubtitleStyle>
      <SubtitleEmailStyle>
        {textEmail}
      </SubtitleEmailStyle>
    </ContentSubtitle>
  );
};