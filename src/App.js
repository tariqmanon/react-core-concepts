import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const bowlers = ['Mustafiz',"Ebadat","Rahi","Taskin","Miraz","Shakib","mehedi"];
  const products =[
    {name:'Photshop', price:'$99.99'},
    {name:'Illustrator', price:'$49.99'},
    {name:'Adobe Xd',price:'$24.99'},
    {name:"adobe premier", price:"$199.99"}
  ]
    const bowlerNames = bowlers.map(bowler => bowler);
    console.log(bowlerNames)
    console.log(products.name)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Reactjs-Core Concepts</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            bowlers.map(bowler => <li>{bowler}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
            
          }

          {
            products.map(product => <li>{product.price}</li>)
          }
        </ul>
        
        
        <Product products={products[0]}></Product>
        <Product products={products[1]}></Product>
        <Product products={products[2]}></Product>
        <Person name="Lionel Messi"></Person>
        <Person job="Footballer"></Person>
        <Person></Person>
        
      </header>
    </div>
  );
}

function Counter(){
  const [count ,setCount] = useState(0);
  //const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseEnter={() => setCount(count + 1)}>Increase</button>
      <button onMouseLeave={() => setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <h6>{user.id}.{user.name}<br></br>{user.email}<br></br>{user.phone}</h6>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  
  const productStyle = {
    border:'1px solid grey',
    backgroundColor:'lightgrey',
    borderRadius:'5px',
    width:'33.33%',
    float:'left',
    padding:'5px',
    color:'#161616',
    margin:'10px'
  }

  const {name, price} = props.products;
  console.log(name, price)
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{border:'2px solid #fff',padding:'15px',width:"300px",margin:'10px'}}>
      <h3>My Name: {props.name}</h3>
  <p>My Profession: {props.job}</p>
    </div>
  )
}
export default App;
