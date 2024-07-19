import React, { useState } from 'react'
import { useNotes } from '../context'

function Add() {
    const {addNote} = useNotes()
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    
    const handleOnClick = () =>{


       if(title !== "" && desc !== ""){
        addNote({title, desc})
        
        setTitle("")
        setDesc("")
       }

        
      
    }
  return (
    <div className='w-full flex items-center justify-between '>

    <input type="text"  className='bg-slate-800/20 border-2 border-white/40 py-2 px-4 text-xl text-white outline-none rounded-md' placeholder='Enter Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <input type="text"  className='bg-slate-800/20 py-2 px-4 text-xl text-white border-2 border-white/40 outline-none rounded-md' placeholder='Enter Description' value={desc} onChange={(e)=>setDesc(e.target.value)}/>
    <button id='myBtn' onClick={handleOnClick} className=' top-5 right-5 bg-transparent border-white border-2 py-2 px-4 text-2xl font-semibold text-slate-100 rounded-md hover:border-transparent hover:bg-yellow-500'>Add Note</button>
    </div>
  )
}

export default Add
