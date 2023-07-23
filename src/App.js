import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";

//let name='Kashif';
function App() {
  const[mode,setMode]=useState('#212529')
  const[alert,setalert]=useState(null);
  const alertmsg=(message,type)=>{
    setalert({
      msg:message,
      type:type,}
    )
    setTimeout(() => {
      setalert(null)
    }, 2000); 
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#212529';
      document.body.style.color='white'
      alertmsg("Dark Mode Enabled","success")
    }
    else{
        setMode('light')
        document.body.style.backgroundColor='white';
        document.body.style.color='#212529'
        alertmsg("Dark Mode disabled","success")
    }
    

  }
  return (
    <>
    {/* < BrowserRouter> */}
    <Navbar  title='TextUtils' aboutUs="about" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
     <div className="container">
     {/* <Routes>
        <Route exact path="/" element={<TextForm alertmsg={alertmsg} Heading="Enter your Quaries"/>}/>
        <Route exact path="/about" element={<About alertmsg={alertmsg}/>}/>
     </Routes>       */}
     {<TextForm alertmsg={alertmsg} Heading="Enter your Quaries"/>}
     </div>
     {/* </BrowserRouter> */}
   </> 
  );
}

export default App;
