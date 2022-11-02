import React from 'react'
import Menu from '../menu/Menu'
import './Nav.css'

export const Nav = () => {

  const [openMenu, setOpenMenu] = React.useState(false)

  const handleMenu = () => setOpenMenu(!openMenu)


  return (
    <>
        <Menu isOpen={openMenu} setOpenMenu={setOpenMenu}/>

        <nav   className='nav flex items-center justify-between h-[3.625rem] px-[1.125rem] [background:var(--bg-primary-linear)]'>

            <img src="../icons/menu.svg" alt="menu" onClick={handleMenu} />
            <div className='flex gap-[0.5rem]'>
                <img src="../icons/python.svg" alt="Python" />
                <h1 className='title font-daysone'>Pythonistas</h1>
            </div>

        </nav>
    </>
  )
}
