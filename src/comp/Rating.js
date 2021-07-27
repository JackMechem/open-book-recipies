import React from 'react';
import { Subtext } from '../styles/elements';
import RecipieCard from './RecipieCard';
import styled, { css } from 'styled-components';
import { colors } from '../styles/global';
import Food from '../images/food.jpg';

const RatingDotContainer = styled.div`

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
margin-top: 10px;

`
const RatingDot = styled.div`

position: static;
width:15px;
height:15px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
border-radius: 100px;

background: ${colors.secondary};

`
;
const Rating = ({rate}) => {
	return (<RatingDotContainer>
		<RatingDot/>
		<RatingDot/>
		<RatingDot/>
		<RatingDot/>
		<RatingDot/>
	</RatingDotContainer>)
}

export default Rating;