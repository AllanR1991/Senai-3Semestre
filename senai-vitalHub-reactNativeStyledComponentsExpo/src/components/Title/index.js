import { TitleStyle } from "./style"

export const Title = ({
  marginBottom = 0,
  marginTop = 0,
  text = ''
}) => {
  return (
    <TitleStyle
      marginBottom={marginBottom}
      marginTop={marginTop}
    >
      {text}
    </TitleStyle>
  )
}