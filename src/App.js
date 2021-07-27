import logo from './logo.svg';
import './App.css';
import Header from './comp/Header.js';
import RecipieCatagory from './comp/RecipieCatagory'
import styled from 'styled-components';
import { Buttons, SearchBar } from './styles/elements';
import { Container, Subhead } from './styles/global'
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai'


const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <RecipieCatagory catagoryName="Popular Recipies" />
        <RecipieCatagory catagoryName="Top Rated Breakfasts" />
        <RecipieCatagory catagoryName="Top Rated Lunches" />
        <RecipieCatagory catagoryName="Top Rated Dinners" />
        <RecipieCatagory catagoryName="Explore" />
      </Container>
    </div>
  );
}



/* <Container>
  <Subhead>Buttons</Subhead>
  <div className="row">
    <Buttons>Playlist</Buttons>
    <Buttons outline>Playlist</Buttons>
    <Buttons primary>Playlist</Buttons>
    <Buttons secondary>Playlist</Buttons>
  </div>
  <Subhead>Search Bar</Subhead>
  <div className="row">
    <SearchBar>
      <div>
        <SearchIcon />
      </div>

      <input
        placeholder="Search for cool things."
        type="text"
      />
    </SearchBar>
  </div>
</Container> */
export default App;