import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './auth'

const Navbar = () => {
  const auth = useAuth();

  return (
        <>
            <Box>
                <AppBar>
                    <Toolbar>
                      <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                      >
                          React Router
                      </IconButton>
                        <Typography variant="h6" component="div">
                          <NavLink to={'/'} style={{textDecoration: 'none', color: '#fff', padding: '10px'}}>Home</NavLink>
                        </Typography>
                        <Typography variant="h6" component="div">
                          <NavLink to={'/products'} style={{textDecoration: 'none', color: '#fff', padding: '10px'}}>Products</NavLink>
                        </Typography>
                        <Typography variant="h6" component="div">
                          <NavLink to={'/profile'} style={{textDecoration: 'none', color: '#fff', padding: '10px'}}>Profile</NavLink>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <NavLink to={'/about'} style={{textDecoration: 'none', color: '#fff', padding: '10px'}}>About</NavLink>
                        </Typography>
                        {
                          auth.isLogedin() ?
                            <Typography variant="h6" >
                              <NavLink to={'/logout'} style={{ textDecoration: 'none', color: '#fff' }}>Logout</NavLink>
                            </Typography>

                            :
                            <Typography variant="h6" >
                              <NavLink to={'/login'} style={{ textDecoration: 'none', color: '#fff' }}>Login</NavLink>
                            </Typography>

                        }
          </Toolbar>
                </AppBar>
            </Box>
            <nav>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
            </nav>
        </>
    )
}

export default Navbar