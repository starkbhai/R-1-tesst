
import './App.css';
import React,{useState} from 'react';



// import Blmode from './components/Blmode';
import Navbar from './components/Navbar';
// import Blmode from './components/Blmode';
import TextForm  from './components/TextForm';
import Alert  from './components/Alert';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {

    const[mode,setMode] = useState('light');


    const toggle=()=>{
      console.log("this is working ");

        if(mode==='light'){
          setMode('dark');
          document.body.style.backgroundColor='grey';
        
         showalert("dark------- mode","success")
       
         setInterval(()=>{
          document.title="dark--MOde"
         
         },1000)
         setInterval(()=>{
          document.title="Click =-------this"
         
         },1100)
         
        }else{
          setMode('light');
          document.body.style.backgroundColor="white";
          showalert("light mode","danger")
          document.title="light mode"
        }


    }


    const[alert,changeAlert]=useState(null)

    const showalert=(message,type)=>{
        changeAlert({
          msg:message,
          typ:type
        });


       setTimeout(() => {
         changeAlert(null); 
       }, 1500);
    };




  return (
   <>
    {/* <Router> */}
  
<Navbar  name="Handicraft" linka="About"  mode={mode}  toggleMode={toggle} />

 <Alert  alert={alert}  />
  
        <div className="container my-3">
            {/* <Switch>
              <Route path="/blmode">
              <Blmode    />  
              </Route>
            
              <Route path="/gh"> */}

              <TextForm showalert={showalert}   heading="Enter the text to analyze"  mode={mode}  toggleMode={toggle} />
{/* 
              </Route>

            </Switch> */}
          </div>
     
          {/* </Router> */}
  </>
  );
}

export default App;
