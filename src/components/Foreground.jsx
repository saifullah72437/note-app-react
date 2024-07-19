import React, { useRef } from 'react'
import Card from './Card'
import Add from './Add'
import { useNotes } from '../context'

function Foreground() {
    const myData =[
        {
            title:"Note 1",
            desc:"Gradients to do not fade in from transparent by default. To fade in from transparent, reverse the gradient direction and use a from-{color} utility.",
            color:"green"
        },
        {
            title:"Note 2",
            desc:"Gradients fade out to transparent by default, without requiring you to add to-transparent explicitly. Tailwind intelligently calculates the right “transparent” value to use based on the starting color to avoid a bug in Safari < 15.4 that causes fading to simply the transparent keyword to fade through gray, which just looks awful.",
            color:"blue"
        },
        {
            title:"Note 3",
            desc:"Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:from-pink-500 to only apply the from-pink-500 utility on hover.",
            color:"slate"
        },
    ]

    const ref = useRef()
    const {notes} = useNotes()
  return (

    

    <div ref={ref} className='absolute top-0 left-0 min-h-[100vh] w-full p-5 flex flex-col gap-4 items-start'>
        <Add/>
    
    <div className='min-h-[100vh] flex gap-4 items-start flex-wrap'>
    {
       notes.map((item, index)=>(
        <Card key={item.id} data={item} reference={ref}/>
       ))
       
       }
    </div>

        
        </div>
  )
}

export default Foreground
