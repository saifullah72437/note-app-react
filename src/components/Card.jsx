import React, { useState } from 'react'
import { motion, useDragControls  } from "framer-motion"
import { useNotes } from '../context'

function Card({data, reference}) {
    const {deleteNote} = useNotes()
    const handleDeleteClick =() =>{
        deleteNote(data.id)
    }

    

    const [title, setTitle] = useState(data.title);
    const [desc, setDesc] = useState(data.desc)

    const [isEditiable, setIsEditiable] =  useState(false)



    const handleEditClick = () =>{
        if(isEditiable){
            setIsEditiable(false)
        }else{
            setIsEditiable(true)
        }
    }

    return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.2}  className={`cursor-pointer bg-slate-800/40 w-[350px] rounded-2xl p-4`}>
        {/* <h2 className='text-2xl text-white '></h2> */}
        <input type="text" className='text-2xl cursor-pointer text-white w-full bg-transparent' readOnly={isEditiable} value={title} onChange={(e)=>setTitle(e.target.value)}/>
        {/* <div className='h-[2px] w-full bg-white my-2 rounded-xl'></div> */}
        <textarea className='text-slate-200 cursor-pointer text-md w-full bg-transparent border-none outline-none' readOnly={isEditiable} name="" id=""  rows="10" onChange={(e)=>setDesc(e.target.value)}>{desc}</textarea>
        <div className='flex justify-between gap-2'>

        <button className='mt-2 w-full bg-slate-700  hover:bg-slate-900 text-white py-2 px-8 text-xl rounded-md' onClick={handleDeleteClick}>Delete</button>
        <button className='mt-2 w-full bg-slate-700  hover:bg-slate-900 text-white py-2 px-8 text-xl rounded-md' onClick={handleEditClick} >Edit</button>
        </div>
    </motion.div>
  )
}

export default Card
