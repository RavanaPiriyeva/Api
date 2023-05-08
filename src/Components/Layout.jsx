import React from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
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