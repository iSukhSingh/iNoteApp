import { useState } from "react";
import NoteContext from "./notesContext";


const NoteState = (props)=> {
  const s1 = {
    "name": "Sukh",
    "class": "CS"
  }
   const [state, setState] = useState(s1);

    const update = ()=>{
        setTimeout(() => {
            setState({
                "name": "sonu",
                "class": "DB"
            })
        }, 1000);
    }
  return (
    <NoteContext.Provider value={{state:state, update:update}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;