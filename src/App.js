
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './componets/Navbar';
import { Home} from './componets/Home';
import About from './componets/About';
import NoteState from './context/notes/NotesState';

function App() {
  return (
    <> 
    <NoteState>
      <Router>
        <Navbar /> 
        <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route> 
        </Switch>
        </div>
      </Router> 
      </NoteState>
    </>
  );
}

export default App;
