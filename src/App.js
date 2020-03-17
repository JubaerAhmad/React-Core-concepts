import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Domain', price:'500 Tk'},
    {name: 'Hosting', price:'1000 Tk'},
    {name: 'Software', price:'10000 Tk'},
    {name: 'Graphics', price:'400 Tk'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Counter></Counter>
        <Users></Users>
        {
          products.map(product => <Product product={product}> </Product>)
        }
        
        
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  
  return (

    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decreace</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data)); 
  }, [])
  return (
    <div>
      <h2>Dynamic Users {users.length}</h2>
      <ol>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ol>
    </div>
  )
}

function Product(props) {
  const productStyle={
    border: '2px solid red',
    borderRadius: '10px',
    backgroundColor: 'gray',
    hight: '300px',
    width: '300px',
    float: 'left',
    padding: '5px',
    margin: '10px',

  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h1>{name}</h1>
      <h3>Price: {price}</h3>
      <button>Buy now</button>
    </div>
  )
}

export default App;
