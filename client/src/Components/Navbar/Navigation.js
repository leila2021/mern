import React from 'react'
import { Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AuthLink from './AuthLink'
import GuestLink from './GuestLink'

const Navigation = () => {
  const isAuth = useSelector(state => state.authReducer.isAuth)
    return (
        <div>
            <Navbar  variant="dark" className="bg-primary" style={{ fontWeight: "500" }}>
      <Navbar.Brand href="/">
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          AuthApp
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      {
        isAuth ? <AuthLink/>:<GuestLink/>
      }
      </Navbar.Collapse>
    </Navbar>
        </div>
    )
}

export default Navigation
