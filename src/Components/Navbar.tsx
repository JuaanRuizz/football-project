import React, { useState } from 'react'
import Logo from "./Assets/Logo-LB1.png"
import { BsCart2 } from "react-icons/bs"
import { HiOutlineBars3 } from "react-icons/hi2"
import { Box, Drawer, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import  HomeIcon  from "@mui/icons-material/Home"
import  InfoIcon  from "@mui/icons-material/Info"
import CommentRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded"

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Home",
            icon: <HomeIcon></HomeIcon>  
        },
        {
            text:"About",
            icon: <InfoIcon></InfoIcon>  
        },
        {
            text:"Tabla de Posiciones",
            icon: <CommentRoundedIcon></CommentRoundedIcon>  
        },
        {
            text:"Equipos",
            icon: <HomeIcon></HomeIcon>  
        },
        {
            text:"Jugadores",
            icon: <HomeIcon></HomeIcon>  
        },
    ]
  return (
    <nav>
      <div className='nav-logo-container'>
        <img src={Logo} alt='Logo' />
      </div>
      <div className='navbar-links-container'>
        <a href="">
            <BsCart2 className='navbar-cart-icon'></BsCart2>
        </a>
        <a href="">About</a>
        <a href="">Tabla de Posiciones</a>
        <a href="">Equipos</a>
        <a href="">Jugadores</a>
        <button className='primary-button'>
            Bookings now
        </button>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={() => setOpenMenu(true)}></HiOutlineBars3>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
