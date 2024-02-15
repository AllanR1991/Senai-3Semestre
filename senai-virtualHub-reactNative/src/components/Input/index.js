import { ContentInputs, InputCodeStyle, InputStyle } from "./style"

export const Input = ({
  placeholder = "",
  keyboardType = "default",
  secureTextEntry = false,
  autoCapitalize = "none"
}) => {
  return (
    <InputStyle
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
    />
  )
}

export const InputCode = ({
  placeholder = '0',
  keyboardType = 'numeric',
  maxLength = 1,
  marginTop = marginTop,
  marginBottom = marginBottom,

}) => {
  return (
    <ContentInputs
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <InputCodeStyle
        marginTop={marginTop}
        marginBottom={marginBottom}
        placeholder={placeholder}
        keyboardType={keyboardType}
        maxLength={maxLength}

      />
      <InputCodeStyle
        marginTop={marginTop}
        marginBottom={marginBottom}
        placeholder={placeholder}
        keyboardType={keyboardType}
        maxLength={maxLength}

      />
      <InputCodeStyle
        marginTop={marginTop}
        marginBottom={marginBottom}
        placeholder={placeholder}
        keyboardType={keyboardType}
        maxLength={maxLength}

      />
      <InputCodeStyle
        marginTop={marginTop}
        marginBottom={marginBottom}
        placeholder={placeholder}
        keyboardType={keyboardType}
        maxLength={maxLength}

      />
    </ContentInputs>
  )
}