import React, { useContext } from 'react'
import noteContext from '../context/notes/notesContext';
import Notes from './Notes';

export const Home = () => {
  return (
    <div>
            <Notes />
    </div>
  )
}
