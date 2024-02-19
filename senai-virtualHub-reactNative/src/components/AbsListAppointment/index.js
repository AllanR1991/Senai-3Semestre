import { ButtonTabsStyle, ButtonTexStyle } from "./style"

export const AbsListAppointment = ({
  textButton,
  clickButton = false,
  onPress,
}) => {
  return (

    <ButtonTabsStyle
      clickButton={clickButton}
      onPress={onPress}
    >

      <ButtonTexStyle
        clickButton={clickButton}
      >
        {textButton}
      </ButtonTexStyle>

    </ButtonTabsStyle>
    
  )
}