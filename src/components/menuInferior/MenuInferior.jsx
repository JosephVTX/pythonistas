import { useState } from 'react'
import { Btn } from './Btn'

const initialState = {
    
    home: false,
    search: false,
    details: false,
    user: false,
    
}

export const MenuInferior = () => {

    const [btnActive, setBtnActive] = useState({...initialState, home: true})
    
  return (
    <footer  className='absolute bottom-0 flex justify-evenly w-full  border-t-[1px] border-[#000]'>

        {Object.keys(initialState).map( (name, i) => <Btn key={i} initialState={initialState} name={name} btnActive={btnActive} setBtnActive={setBtnActive} />)}

    </footer>
  )
}
