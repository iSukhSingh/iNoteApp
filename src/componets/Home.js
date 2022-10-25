import React, { useContext } from 'react'
import noteContext from '../context/notes/notesContext';
import { AddNote } from './AddNote';
import Notes from './Notes';

export const Home = () => {
  return (
    <div>
            <Notes />
    </div>
  )
}
