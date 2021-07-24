import styled from 'styled-components';

export const colors = {
	white: "#fff",
	black: "#000",
  dgray: "#383838",
	gray: "#C4C4C4",
	lgray: "#F6F6F6",
	primary: "#61FFD9",
	secondary: "#FF6173"
}


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
padding-right: 0px;
position: absolute;
left: 0%;
right: 0%;
top: 57px;
bottom: 0%;
overflow-y: scroll;

scrollbar-width: none;
-ms-overflow-style: none;

::-webkit-scrollbar {
  display: none;
}

  .row {
    width: 100%;
    display: flex;
    align-center: center;
  }
`;

export const Subhead = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 160px 0 48px;
`