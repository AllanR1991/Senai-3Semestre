import { Button } from "../Button"
import { TitleStyle } from "../Title/style"
import { ModalCancel } from "./style"

export const CancelationModal = ({
  visible, setShowCancel, ...rest
}) => {
  return(
    <ModalCancel {...rest} visible={visible} transparent ={ true}  animationType='fade' >
      <TitleStyle>Cancelar Consulta</TitleStyle>
      <Button text="Cancelar" onPress={()=> setShowCancel(false) }/>
    </ModalCancel>
  )
}