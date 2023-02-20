// import logo from 'assets/svg/logo.svg';
import './App.css';
import React from "react"
import WithMaterialUI from 'WithMaterialUI';

interface IApp {
  
}

const App:React.FC<IApp> = ()=>{
  return (
    <div className="App">
      <WithMaterialUI/>
    </div>
  );
}

export default App;
