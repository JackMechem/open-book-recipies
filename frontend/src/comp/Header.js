import React from 'react';
import './comp.css'

import styled, { css } from 'styled-components';

import { colors } from '../styles/global';
import { HeaderContainer, HeaderTitle, HeaderSearchBar, HeaderButton} from '../styles/elements'

import { AiOutlineSearch as SearchIcon } from 'react-icons/ai'



const Header = () => {

  return (<div>
    <HeaderContainer>
      <div className="row">
        <HeaderTitle>
          <text>Open Recipies</text>
        </HeaderTitle>
        <HeaderSearchBar>
          <input placeholder="Search for recipies." />
          <div>
            <SearchIcon />
          </div>
        </HeaderSearchBar>
        <HeaderButton login>Login</HeaderButton>
        <HeaderButton signup>Signup</HeaderButton>
      </div>
    </HeaderContainer>
  </div>)

}

export default Header;