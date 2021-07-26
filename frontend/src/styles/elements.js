import styled, { css } from 'styled-components';
import { colors } from "./global"

export const Buttons = styled.a`
  height: 48px;
  line-height: 48px;
  padding: 0 64px;
  font-weight: 600;
  border-radius: 100px;
  color: ${colors.black};
  background-color: ${colors.white};
  cursor: pointer;
  margin: 0 24px;
  font-size: 14px;
  text-decoration: none;

  ${props => props.outline && css`
    background: transparent;
    border: 1px solid ${colors.black};
  `}
  ${props => props.primary && css`
    background: ${colors.primary};;
  `}
  ${props => props.secondary && css`
    background: ${colors.secondary};
  `}

`;


export const SearchBar = styled.div`

  height: 48px;
  width: 700px;
  position: relative;
  margin: 0 24px;

  input {

    height: 48px;
    width: 700px;
    padding: 0 64px;
    border-radius: ${props => props.squared ? '0px' : '100px'};
    border: none;
    font-size: 14px;
    outline: none;
    color: ${colors.gray};
    &::placeholder {
      color: ${colors.gray}
    }
  }

  div {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    z-index: 10;
    width: 16px;
    height: 16px;
  }
`;

export const HeaderContainer = styled.div`

  position: absolute;
  height: 57px;
  left: 0%;
  right: 0%;
  top: 0px;
  background: ${colors.dgray};
  .row {
    width: 100%;
    display: flex;
    align-center: center;
  }
`

export const HeaderTitle = styled.div`

  position: absolute;
  width: 192px;
  height: 57px;
  left: 25px;
  top: 0px;

  text {
    position: absolute;
    height: 38px;
    left: 0%;
    right: 19.27%;
    top: calc(50% - 38px/2 - 0.5px);

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${colors.primary};
  }

`

export const HeaderSearchBar = styled.div`

position: absolute;
height: 37px;
left: 22.06%;
right: 30%;
top: 11px;
  input {
    position: absolute;
    height: 37px;
    width: 100%;
    top: 0px;
    padding: 0 64px;
    border-radius: ${props => props.squared ? '0px' : '100px'};
    border: none;
    font-size: 14px;
    outline: none;
    color: ${colors.gray};
    &::placeholder {
      color: ${colors.gray}
    }
  }

  div {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    z-index: 10;
    width: 16px;
    height: 16px;
  }
`
export const HeaderButton = styled.a `

  position: absolute;
  font-family: Roboto;
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  color: ${colors.white};
  cursor: pointer;

  ${props => props.login && css`
  
    width: 48px;
    height: 28px;
    right: 15px;
    top: 15px;
  `}
  ${props => props.signup && css`
  
    width: 61px;
    height: 28px;
    right: 71px;
    top: 15px;
  `}

`
export const Subtext = styled.p `

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 10px;
display: flex;
align-items: center;

color: ${colors.black};


flex: none;
order: 0;
flex-grow: 0;
margin: 10px 0px;
`
