import logo from './logo.svg';
import './App.css';


function Header (props){
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main (props){
  return (
    <main>
      <p>{props.hello} main</p>
      <ul>
        {props.dishes.map((dish) => <li key={dish.id}>{dish.title}</li>)}
      </ul>
    </main>
  )
}

function Footer (props){
  return (
    <footer>{props.foot}</footer>
  )
}

const dishes  = [
  "Mac and Cheese",
  "Salmon",
  "Beef"
]


//To avoid the "key" error
const dishObject = dishes.map((dish, i) => ({id: i, title: dish}));

function App() {
  return (
    <div className="App">
      <Header name="Carlos"/>
      <Main hello="My" dishes ={dishObject}/>
      <Footer foot="My Footer"/>
    </div>
  );
}

export default App;
