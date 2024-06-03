import React, { useState } from 'react'
import logo from "./../assets/images/logo.png"
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
function Header() {

    

    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]
  return (
<div className='flex gap-8 items-center '>
    <img src={logo} className='w-[80px] object-contain md:w-[112px]' />
    {
        menu.map((item)=>(
            <HeaderItem name={item.name} Icon={item.icon}/>
        ))
    }
</div>

  )
    
}

export default Header