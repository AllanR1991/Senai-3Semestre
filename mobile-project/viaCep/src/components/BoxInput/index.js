import { Input } from "../Input";
import { Label } from "../Label";
import { FieldContent } from "./style";

export const BoxInput = ({
  textLabel,
  placeholder,
  fieldWidth = 100,
  editable = false,
  filedValue=null,
  onChangeText=null,
  keyType = 'default',
  maxLenght,
  minLenght,
}) => {
  return(
    //FieldContent
    <FieldContent fieldWidth= {fieldWidth} >
      <Label textLabel= {textLabel} />
      <Input
        placeholder={placeholder}
        editable={editable}
        keyType={keyType}
        maxLenght={maxLenght}
        minLenght={minLenght}
        filedValue={filedValue}
        onChangeText={onChangeText}
      />
    </FieldContent>
    
  );
};