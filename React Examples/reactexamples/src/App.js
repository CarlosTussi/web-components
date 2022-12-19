import logo from './logo.svg';
import './App.css';

import Heading from './components/Heading';
import Hooks from './components/Hooks';

import React, {useState} from 'react';

import MyProvider from './components/MyProvider';
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Reducer from './components/Reducer';

import Fruits from './components/Fruits';
import FruitsCounter from './components/FruitsCounter';

import About from './components/About';
import Articles from './components/Articles';

import {Routes, Route, Link} from 'react-router-dom';

import ReactPlayer from 'react-player';
import DessertsList from './components/DessertsList';

import Many from './components/Many';
import FormExample from './components/FormExample';
import Form from './Form';

import UseMemo from './components/UseMemo';

import BoxProvider from './components/BoxProvider';
import LeftBox from './components/LeftBox';
import RightBox from './components/RightBox';
import BoxInput from './components/BoxInput';

import Gift from './components/Gift';
import Fetching from './components/Fetching';

import ChakraUI from './components/ChakraUI';

import ContainmentComponent from './components/ContainmentComponent';
import SpecializedComponent from './components/SpecializedComponent';

import MouseMain from './components/MouseMain';

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

const listElements = [
  {
    id: 1,
    name: 'Carlos'
  },
  {
    id:2,
    name:'Eduardo'
  },
  { 
    id:3,
    name:'Tussi'
  },
  {
    id:4,
    name:'Leite'
  }
];
function App() {

  const [fruits] = useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
    {fruitName: 'pear', id: 4}
]);


  return(  
    <div className="App">
    
    <MouseMain />

    <ContainmentComponent>
      <h3>A H3 heading</h3>
    </ContainmentComponent>
    <br/>
    <SpecializedComponent/>

    {/* <ChakraUI /> */}

     <Fetching />

    <Gift />


    <BoxProvider>
      <LeftBox style={{paddingRight: "2em"}} />      
      <RightBox />     
      <BoxInput /> 
    </BoxProvider>

      {/* <UseMemo /> */}
      
      <Form />

      <FormExample />

      <MyProvider>
        <Child1 />
        <Child2 />
      </MyProvider> 

      <Reducer />


      <h1>Where should the state go?</h1>
      <Fruits fruitList = {fruits}/>
      <FruitsCounter fruitList = {fruits}/>

      <nav className='my-nav'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/articles">Articles</Link>
      </nav>    

      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/articles" element={<Articles/>}/>
      </Routes>

    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />

    <h2>List of Deserts</h2>
    <DessertsList data={desserts}/>

    {listElements.map((elem) => {
      return <Many key={elem.id} element={elem.name}/>
    })}
    </div>
  );
}

export default App;
