import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name="Noakhali" specialty="Division"></District>
      <District name="Bi-Bariya" specialty="Jodda Akbar"></District>
      <District name="Cumilla" specialty="Moynamoti" ></District>
      <LoadPosts></LoadPosts>
    </div>
  );
}

function LoadPosts(){
  const [Posts, setPosts] =useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  return(
    <div>
      <h1>Posts: {Posts.length}</h1>
      {
        Posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>

  )
}

function Post(props){
  return(
    <div style={{backgroundColor: 'lightgray', margin:'20px', border:'2px solid salmon'}}>
      <h3>Title: {props.title}</h3>
      <p>Body : {props.body}</p>
    </div>
  )
}

const districtStyle ={
  backgroundColor:'lightPink',
  margin: '20px',
  borderRadius: '10px',
  padding:'15px',
  
  
}

function District (props){
  const [power, setPower]=useState(1);
  const boostPower =() =>{
    const newPower = power*2;
    setPower(newPower);
  }
  return(
    <div style={districtStyle} className='district'>
      <h2>Name: {props.name} </h2>
      <p>Specialty: {props.specialty} </p>
      <h4>Power: {power} </h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}

export default App;
