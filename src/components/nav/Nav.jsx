import React from 'react'
import './Nav.css'

export const Nav = () => {

  const [openMenu, setOpen] = React.useState(false)

  const handleMenu = () => setOpen(!openMenu)

  return (
    <>
        
        <nav className='nav flex items-center justify-between h-[3.625rem] px-[1.125rem]'>

            <img src="../icons/menu.svg" alt="menu" onClick={handleMenu} />
            <div className='flex'>
                <img src="../icons/python.svg" alt="" />
                <h1 className='title font-daysone'>Pythonistas</h1>
            </div>

        </nav>
    </>
  )
}
