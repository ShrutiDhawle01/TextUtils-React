import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Switch,
//   Link,
// } from "react-router-dom";



//v-4

// function App() {
//   return (
//     <div className = 'blank'>Lovely</div>
//   );
// }

// let name = "Harry" ;
// function App() {
//   return (
//     <>
//     <nav>
//       <li>Home</li>
//       <li>About</li>
//       <li>Contact</li>
//     </nav>
//     <div className = "container">
//       <h1>Hello {name}</h1>
//       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quos repellendus autem ut, aliquid ea doloremque ad itaque vitae minima possimus laboriosam! Tempora quisquam explicabo quas reprehenderit, illum excepturi nemo repellendus laboriosam assumenda nisi!</p>
      
      
//     </div>
//     </>
//   );
// }

//v-5

// function App() {
//   return (
//     <>
//     <Navbar title="TextUtils" aboutText="About"/>
//     {/* <Navbar/> */}
//     <About/>
//     <div className="container my-3">
//       <TextForm heading="Enter the text to Analyze below"/>

//     </div>
//     </>
//   );
// }

// export default App;

//v-12

// function App() {
//   const [mode, setMode] = useState('light')  //whether dark mode is enabled or not
//   const toggleMode = ()=>{
//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743' //'#212529'
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor = 'white'
//     }
//   }


//   return (
//     <>
//     <Navbar title="TextUtils" aboutText="About" mode ={mode} toggleMode = {toggleMode}/>
//     {/* <Navbar/> */}
//     <About/>
//     <div className="container my-3">
//       <TextForm heading="Enter the text to Analyze below" mode={mode}/>

//     </div>
//     </>
//   );
// }

// export default App;



//v-13

// 


//v-16


function App() {
  const [mode, setMode] = useState('light')  //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); //alert is object

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'; //'#212529'
      showAlert(' Dark Mode has been enabled',"success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title = 'TextUtils is Aamzing';
      // }, 2000);
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(' Light Mode has been enabled',"success");
      document.title = 'TextUtils - Light Mode'
    }
  }


  return (
    <>
    <Navbar title="TextUtils" aboutText="About" mode ={mode} toggleMode = {toggleMode}/>
    {/* <Navbar/> */}
    <Alert alert={alert}/>

    <div className="container my-3">
      <TextForm heading="Enter the text to Analyze below" mode={mode} showAlert={showAlert}/>
    </div>

    </>
  );
}

export default App;