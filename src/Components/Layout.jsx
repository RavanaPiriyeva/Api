import React from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <>
      <nav style={{backgroundColor:'black' , padding:"20px 0",}}>
        <ul  style={{listStyleType: "none", display:"flex"}}>
          <li>
            <Link to="/" style={{color:"white" ,textDecoration:'none' ,fontSize:20 ,padding:"0 20px"}}>Home</Link>
          </li>
          <li>
            <Link to="/user" style={{color:"white" ,textDecoration:'none' ,fontSize:20 ,padding:"0 20px"}}>User</Link>
          </li>
        </ul>
      </nav>

      <Container>
        {children}
      </Container>
    </>
  )
}

export default Layout