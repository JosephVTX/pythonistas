

export const Btn = ({name, btnActive, initialState, setBtnActive}) => {

  return (
    <button onClick={()=> setBtnActive({...initialState, [name]: true})}  className={`h-[3.125rem] w-[4.1875rem] ${btnActive[name] ? 'bg-[#FEC630]' : 'bg-gray-200'} shadow-[0px_4px_4px_rgba(0,0,0,0.25);] rounded-[0.3125rem] flex items-center justify-center`}>
            
            <img src={`../icons/${name}.svg`} alt={name} />
            
    </button>
  )
}
