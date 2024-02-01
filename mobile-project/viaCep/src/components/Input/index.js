import { InputText } from "./style";

export const Input = ({
  placeholder,
  editable,
  fieldValue,
  onChangeText,
  keyType,
  maxLenght,
  minLenght,
}) => {
  return(
    <InputText
      placeholder={placeholder}
      editable={editable}
      fieldValue={fieldValue}
      onChangeText={onChangeText}
      keyType={keyType}
      maxLenght={maxLenght}
      minLenght={minLenght}
    />
  );
};