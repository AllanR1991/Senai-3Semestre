import { ButtomCircleStyle, ButtonGoogleStyle, ButtonStyle, ImageBackStyle, ImageCancelStyle, TextButtonGoogleStyle, TextButtonStyle } from "./style";
import { AntDesign } from '@expo/vector-icons';


export const Button = ({
  text = '',
  onPress=onPress,
}) => {
  return(
    <ButtonStyle
      onPress={onPress}
    >
      <TextButtonStyle>{text}</TextButtonStyle>
    </ButtonStyle>
  );
};


export const ButtonGoogle = ({
  text = '',
}) => {
  return(
    <ButtonGoogleStyle>
      <AntDesign name="google" size={14} color="#496BBA" />
      <TextButtonGoogleStyle>{text}</TextButtonGoogleStyle>
    </ButtonGoogleStyle>
  );
};

export const ButtonBack = ({
  onPress={onPress}
}) => {
  return(
    <ButtomCircleStyle
        onPress={onPress}
      >
        <ImageBackStyle />
      </ButtomCircleStyle>
  )
}

export const ButtonCancel = ({
  onPress={onPress}
}) => {
  return(
    <ButtomCircleStyle
        onPress={onPress}
      >
        <ImageCancelStyle />
      </ButtomCircleStyle>
  )
}