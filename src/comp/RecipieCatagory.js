import React from 'react';
import { Subtext } from '../styles/elements';
import RecipieCard from './RecipieCard';
import styled from 'styled-components';
import { colors } from '../styles/global';
import Food from '../images/food.jpg'

const RecipieCatagoryContainer = styled.div`

display: flex;
flex-direction: row;
flex:none;
align-items: flex-start;
padding: 10px;
padding-right: 0%;
left: 0%;
right:0%;
overflow-x: scroll;
scrollbar-color: ${colors.gray} transparent;
`


const RecipieCatagory = (props) => {


    return (<div style={{ flex: "none", order: 0, alignSelf: "stretch", flexGrow: 0,  }}>

        <Subtext>{props.catagoryName}</Subtext>
        <RecipieCatagoryContainer>
                <RecipieCard name="Lorem ipsum dolor" img={Food}/>
                <RecipieCard name="Lorem ipsum dolor" img={Food}/>
                <RecipieCard name="Lorem ipsum dolor" img={Food}/>
                <RecipieCard name="Lorem ipsum dolor" img={Food}/>
                <RecipieCard name="Lorem ipsum dolor" img={Food}/>
                <RecipieCard name="Lorem ipsum dolor" img={Food}/>
                <RecipieCard name="Lorem ipsum dolor" img={Food}/>
                <RecipieCard name="Lorem ipsum dolor" img={Food}/>
                <RecipieCard name="Lorem ipsum dolor" img={Food}/>
                <RecipieCard name="Lorem ipsum dolor" img={Food}/>
                <RecipieCard name="Lorem ipsum dolor" img={Food}/>
        </RecipieCatagoryContainer> 
        </div>)
}

export default RecipieCatagory;