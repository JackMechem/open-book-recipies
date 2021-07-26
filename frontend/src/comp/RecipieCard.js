import React from 'react';
import { AiFillPropertySafety } from 'react-icons/ai';
import styled from 'styled-components';
import { Subtext } from '../styles/elements';
import { colors } from '../styles/global';
import Rating from './Rating'

const CardBackground = styled.div`

display: flex;
flex: none;
flex-direction: column;
align-items: flex-start;
padding: 10px;
margin: 0px 5px;
position: static;
width: 255px;
align-self: flex-start;
background: ${colors.white};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`

const CardImage = styled.div`
margin-top: 10px;
height: 150px;
width: 255px;
height: 255px;
border-radius: 10px;
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  
border-radius: 10px;
}

`

const RecipieCard = ({ name, img, rating }) => {

  return (<CardBackground>
    <Subtext>{name}</Subtext>
    <Rating></Rating>
    <CardImage>
      <img src={img} />
    </CardImage>
  </CardBackground>)

}

export default RecipieCard;