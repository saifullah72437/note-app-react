import { createContext, useContext } from "react";


export const NotesContext = createContext({
    notes:[
        {
            id: 1,
            title: "Hello I am Title",
            desc:"Hello I am Desc"
        }
    ],

    deleteNote: (id)=>{},
    addNote: (id, title, desc)=>{},
    updateNote: (id, Note)=>{}
})

export const NotesContextProvider = NotesContext.Provider;

export const useNotes = ()=>{
    return useContext(NotesContext)
}