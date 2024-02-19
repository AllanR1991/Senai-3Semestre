import styled, { css } from 'styled-components/native';

export const ButtonTabsStyle = styled.TouchableHighlight`
  padding: 12px 14px;
  border-radius: 5px;

  /* Se o botao estiver clicado, aplica-se o fundo azul, caso contrario fundo transparente. */
  
  ${props => props.clickButton ?
    css`
      background-color: #496bba;
  `
    :
    css`
      background-color: transparent;
      border: 2px solid #607ec5;
  `}

`

export const ButtonTexStyle = styled.Text`
  font-size: 12px;
  font-family: 'MontserratAlternates_600SemiBold';
  
  /* Se o botao estiver clicado, aplica-se o fundo azul, caso contrario fundo transparente. */

  ${props => props.clickButton ?
    css`
      color: #FBFBFB;
  `
    :
    css`
      color: #607ec5;
  `}
`