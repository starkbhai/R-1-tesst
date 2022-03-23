import React,{useState} from 'react'

export default function Blmode() {

  // const my={
  //   color:'white',
  //   backgroundColor:'black' ,
   
  // }


  const[my,why]=useState(
    {
      color:'white',
      backgroundColor:'black' , 
    }
  )



    const aply=()=>{
     if(my.color ==='balck'){
       why(
         {
            color:'white',
            backgroundColor:'black'
         }
       )
       setBtnText("Enable Light mode ")
     }else{
         
                why(
                  {
                    color:'black',
                    backgroundColor:'white'
                  }
                )

                setBtnText("Enable lllllllllllll Mode")

        }
    }




  

  const[btnText,setBtnText]=useState("Enable 0Dark0 Mode")

  return (
    <div>
         <div  className="card text-center" style={my}>
        <div  className="card-header">
          Featured
        </div>
        <div  className="card-body">
          <h5  className="card-title">Special title treatment</h5>
          <p  className="card-text">With supporting text below as a natural lead-in to additional content.</p>
         <a href="#"  className="btn btn-primary" onClick={aply}>{btnText}</a>
        </div>
        <div  className="card-footer text-muted">
            2 days ago
        </div>
        </div>
    </div>
  )
}
