import React from 'react'
import PropTypes  from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (

    <>
     
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" >{props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" >Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/blmode" >{props.linka}</Link>
        </li> */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item">Action</a></li>
          
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>

      <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} onClick={props.toggleMode}>
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label class="form-check-label" HTMLfor="flexSwitchCheckDefault">Default switch checkbox input</label>
      </div>

      <form className="d-flex">
          
     
           
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

</>

  )
}

Navbar.propTypes={
  name:PropTypes.string,
  linka:PropTypes.string
}

