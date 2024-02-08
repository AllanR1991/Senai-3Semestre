import { InputStyle } from "./style";

export const Input = ({
  width= "90%",
  height="53px",
  padding="16px",
  borderRadius="5px",
  fontFamily = "MontserratAlternates_600SemiBold",
  color= "#49B3BA",
  border= "2px solid #49B3BA",
  placeholder='',
  fontSize="14px"
}) =>{
  return (
    <InputStyle
      placeholder={placeholder}
      width={width}
      height={height}
      padding={padding}
      borderRadius={borderRadius}
      fontFamily={fontFamily}
      color={color}
      fontSize={fontSize}
      border={border}
      
    />
  );
};